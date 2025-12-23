const mongoose = require("mongoose");
const problemSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  options: {
    A: String,
    B: String,
    C: String,
    D: String,
  },
  answer: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports =
  mongoose.models.Problem || mongoose.model("Problem", problemSchema);
