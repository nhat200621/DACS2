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
    const { username, score } = req.body;

    // ✅ validate an toàn
    if (!username || typeof score !== "number") {
      return res.status(400).json({ message: "Dữ liệu không hợp lệ" });
    }

    const existing = await QuickLeaderboard.findOne({ username });

    if (existing) {
      if (score > existing.score) {
        existing.score = score;
        await existing.save();
      }
      return res.json({ message: "OK" });
    }

    await QuickLeaderboard.create({ username, score });
    res.json({ message: "OK" });
  } catch (err) {
    console.error("❌ Lỗi POST leaderboard:", err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;

