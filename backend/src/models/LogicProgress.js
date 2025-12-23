const mongoose = require("mongoose");
const logicProgressSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  problemId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Problem",
    required: true,
  },
  isCorrect: { type: Boolean, default: false },
  updatedAt: { type: Date, default: Date.now },
});
module.exports = mongoose.model("LogicProgress", logicProgressSchema);
