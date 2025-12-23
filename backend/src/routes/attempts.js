const express = require("express");
const router = express.Router();
const Attempt = require("../models/Attempt");
router.post("/", async (req, res) => {
  const { problemId, answer } = req.body;
  const problem = await Problem.findById(problemId);
  if (!problem)
    return res.status(404).json({ ok: false, message: "Problem not found" });

  const correct = problem.answer === answer;
  res.json({
    ok: true,
    correct,
    correctAnswer: problem.answer,
  });
});
router.get("/user/:userId", async (req, res) => {
  const attempts = await Attempt.find({ userId: req.params.userId }).populate(
    "problemId"
  );
  res.json(attempts);
});
module.exports = router;