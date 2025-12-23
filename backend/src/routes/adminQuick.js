const express = require("express");
const router = express.Router();
const QuickProblem = require("../models/QuickProblem");
router.get("/", async (req, res) => {
  try {
    const questions = await QuickProblem.find();
    res.json(questions);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Lỗi khi tải câu hỏi tính nhanh", error: err.message });
  }
});
router.post("/", async (req, res) => {
  try {
    const { question, answer } = req.body;
    if (!question || !answer)
      return res.status(400).json({ message: "Thiếu dữ liệu cần thiết" });

    const newQuestion = new QuickProblem({ question, answer });
    await newQuestion.save();

    res.json({ message: "Đã thêm câu hỏi tính nhanh", question: newQuestion });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Lỗi khi thêm câu hỏi tính nhanh", error: err.message });
  }
});
router.delete("/:id", async (req, res) => {
  try {
    await QuickProblem.findByIdAndDelete(req.params.id);
    res.json({ message: "Đã xóa câu hỏi tính nhanh" });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Lỗi khi xóa câu hỏi tính nhanh", error: err.message });
  }
});
module.exports = router;
