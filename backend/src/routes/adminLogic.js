const express = require("express");
const router = express.Router();
const Problem = require("../models/Problem");
router.get("/", async (req, res) => {
  try {
    const problems = await Problem.find();
    res.json(problems);
  } catch (err) {
    res
      .status(500)
      .json({
        message: "Lỗi khi tải danh sách câu hỏi logic",
        error: err.message,
      });
  }
});
router.post("/", async (req, res) => {
  try {
    const { title, description, options, answer } = req.body;
    if (!title || !description || !options || !answer)
      return res.status(400).json({ message: "Thiếu dữ liệu yêu cầu" });

    await Problem.create({ title, description, options, answer });
    res.json({ message: "Thêm câu hỏi Logic thành công!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Lỗi khi thêm câu hỏi Logic" });
  }
});
router.delete("/:id", async (req, res) => {
  try {
    await Problem.findByIdAndDelete(req.params.id);
    res.json({ message: "Đã xóa câu hỏi logic" });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Lỗi khi xóa câu hỏi logic", error: err.message });
  }
});
module.exports = router;