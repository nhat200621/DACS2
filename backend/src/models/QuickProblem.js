const mongoose = require("mongoose");
const quickProblemSchema = new mongoose.Schema({
  question: { type: String, required: true },
  answer: { type: Number, required: true },
});
module.exports = mongoose.model("QuickProblem", quickProblemSchema);
