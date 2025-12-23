const express = require("express");
const router = express.Router();
const Problem = require("../models/Problem");
const LogicProgress = require("../models/LogicProgress");
router.get("/", async (req, res) => {
  try {
    const problems = await Problem.find();
    res.json(problems);
  } catch (err) {
    console.error("❌ Lỗi khi lấy problems:", err);
    res.status(500).json({ message: "Lỗi server khi tải bài logic." });
  }
});
router.get("/:id", async (req, res) => {
  try {
    const problem = await Problem.findById(req.params.id);
    if (!problem)
      return res.status(404).json({ message: "Không tìm thấy bài này." });
    res.json(problem);
  } catch (err) {
    console.error("❌ Lỗi khi lấy problem:", err);
    res.status(500).json({ message: "Lỗi server khi tải bài logic." });
  }
});
router.post("/", async (req, res) => {
  try {
    const newP = new Problem(req.body);
    const saved = await newP.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});
router.post("/progress", async (req, res) => {
  try {
    const { userId, problemId, isCorrect } = req.body;
    if (!userId || !problemId)
      return res.status(400).json({ message: "Thiếu userId hoặc problemId" });

    const record = await LogicProgress.findOneAndUpdate(
      { userId, problemId },
      { isCorrect, updatedAt: new Date() },
      { upsert: true, new: true }
    );

    res.json({ message: "Đã lưu tiến độ", record });
  } catch (err) {
    console.error("❌ Lỗi khi lưu tiến độ:", err);
    res
      .status(500)
      .json({ message: "Lỗi khi lưu tiến độ", error: err.message });
  }
});
router.get("/progress/:userId", async (req, res) => {
  try {
    const progress = await LogicProgress.find({ userId: req.params.userId });
    res.json(progress);
  } catch (err) {
    console.error("❌ Lỗi khi tải tiến độ:", err);
    res
      .status(500)
      .json({ message: "Lỗi khi tải tiến độ", error: err.message });
  }
});
module.exports = router;
