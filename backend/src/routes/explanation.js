const express = require("express");
const router = express.Router();
const { CohereClient } = require("cohere-ai");
const cohere = new CohereClient({
  token: process.env.CO_API_KEY,
});

router.post("/", async (req, res) => {
  try {
    const { question, options, answer } = req.body;

    if (!question || !options) {
      return res
        .status(400)
        .json({ message: "Thiếu dữ liệu đầu vào (question hoặc options)" });
    }

    const prompt = `
You are an expert in logical thinking. Please explain in detail the following question:

Question: ${question}
Options:
${Object.entries(options)
  .map(([k, v]) => `${k}. ${v}`)
  .join("\n")}

${
  answer
    ? `The correct answer is: ${answer}. Explain why this is the correct choice, and why the other choices are incorrect.`
    : "No answers yet. Analyze each choice and choose the most appropriate answer."
}
`;
    const response = await cohere.chat({
      model: "command-r-08-2024",
      message: prompt,
    });
    const explanation =
      response?.text?.trim() || "Không có phản hồi từ Cohere.";

    res.json({ explanation });
  } catch (err) {
    console.error("❌ Lỗi khi gọi Cohere:", err);
    res.status(500).json({ message: "Lỗi khi gọi Cohere", error: err.message });
  }
});
module.exports = router;
