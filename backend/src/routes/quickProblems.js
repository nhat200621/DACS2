const express = require("express");
const QuickProblem = require("../models/QuickProblem");
const router = express.Router();
router.get("/", async (req, res) => {
  const problems = await QuickProblem.find();
  res.json(problems);
});
module.exports = router;
