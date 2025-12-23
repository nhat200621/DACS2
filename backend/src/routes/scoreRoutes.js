const express = require("express");
const router = express.Router();
const Score = require("../models/Score");
router.get("/", async (req, res) => {
  const top = await Score.find().sort({ score: -1 }).limit(10);
  res.json(top);
});
router.post("/", async (req, res) => {
  const score = await Score.create(req.body);
  res.json(score);
});
module.exports = router;
