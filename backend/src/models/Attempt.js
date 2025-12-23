const mongoose = require("mongoose");
const AttemptSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    problemId: { type: mongoose.Schema.Types.ObjectId, ref: "Problem" },
    answer: { type: mongoose.Schema.Types.Mixed },
    correct: { type: Boolean },
    timeSpentSec: { type: Number },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Attempt", AttemptSchema);
