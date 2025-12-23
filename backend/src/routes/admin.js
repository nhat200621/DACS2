const express = require("express");
const router = express.Router();
const User = require("../models/User");
const LogicProgress = require("../models/LogicProgress");
const QuickLeaderboard = require("../models/QuickLeaderboard");
const Problem = require("../models/Problem");
router.get("/users", async (req, res) => {
  try {
    const users = await User.find().select("-password");
    res.json(users);
  } catch (err) {
    res
      .status(500)
      .json({
        message: "Lỗi khi tải danh sách người dùng",
        error: err.message,
      });
  }
});
router.get("/users/:username/progress", async (req, res) => {
  try {
    const { username } = req.params;
    const progress = await LogicProgress.find({ userId: username });
    const problemIds = progress.map((p) => p.problemId);
    const problems = await Problem.find({ _id: { $in: problemIds } });

    const results = progress.map((p) => {
      const prob = problems.find(
        (pr) => pr._id.toString() === p.problemId.toString()
      );
      return {
        problemId: p.problemId,
        title: prob?.title || "Bài tập không tồn tại",
        isCorrect: p.isCorrect,
      };
    });

    res.json(results);
  } catch (err) {
    console.error("❌ Lỗi khi lấy tiến độ user:", err);
    res
      .status(500)
      .json({ message: "Lỗi khi lấy tiến độ user", error: err.message });
  }
});
router.put("/users/:id/toggle-lock", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user)
      return res.status(404).json({ message: "Không tìm thấy người dùng" });

    user.locked = !user.locked;
    await user.save();
    res.json({
      message: user.locked ? "Đã khóa tài khoản" : "Đã mở khóa tài khoản",
      locked: user.locked,
    });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Lỗi khi cập nhật trạng thái", error: err.message });
  }
});
router.delete("/users/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user)
      return res.status(404).json({ message: "Không tìm thấy người dùng" });
    await LogicProgress.deleteMany({ userId: user.username });
    await QuickLeaderboard.deleteMany({ username: user.username });
    await user.deleteOne();

    res.json({ message: "Đã xóa người dùng và dữ liệu liên quan" });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Lỗi khi xóa tài khoản", error: err.message });
  }
});

module.exports = router;
