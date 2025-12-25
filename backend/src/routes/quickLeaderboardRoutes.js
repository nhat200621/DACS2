const express = require("express");
const router = express.Router();
const QuickLeaderboard = require("../models/QuickLeaderboard");

router.get("/", async (req, res) => {
  try {
    const top = await QuickLeaderboard.find()
      .sort({ score: -1, createdAt: 1 })
      .limit(10);
    res.json(top);
  } catch (err) {
    console.error("❌ Lỗi GET leaderboard:", err);
    res.status(500).json({ message: "Server error" });
  }
});

router.post("/", async (req, res) => {
  try {
    let { username, score } = req.body;

    score = Number(score);

    if (isNaN(score)) {
      return res.status(400).json({ message: "Score không hợp lệ" });
    }

    if (!username) {
      username = `player_${Date.now()}`;
    }

    const existing = await QuickLeaderboard.findOne({ username });

    if (existing) {
      if (score > existing.score) {
        existing.score = score;
        await existing.save();
        return res.json({ message: "🔁 Đã cập nhật điểm cao mới!" });
      } else {
        return res.json({
          message: "✅ Điểm hiện tại thấp hơn, không cập nhật.",
        });
      }
    }

    await QuickLeaderboard.create({ username, score });
    res.json({ message: "✅ Đã thêm người chơi mới vào bảng xếp hạng!" });
  } catch (err) {
    console.error("❌ Lỗi POST leaderboard:", err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;


module.exports = router;

