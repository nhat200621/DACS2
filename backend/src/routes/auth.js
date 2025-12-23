const express = require("express");
const router = express.Router();
const User = require("../models/User");
router.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password)
      return res
        .status(400)
        .json({ message: "Thiếu tên đăng nhập hoặc mật khẩu!" });

    const existing = await User.findOne({ username });
    if (existing)
      return res.status(400).json({ message: "Tên đăng nhập đã tồn tại!" });

    const user = new User({ username, password });
    await user.save();

    res.json({ message: "✅ Đăng ký thành công!" });
  } catch (err) {
    console.error("❌ Lỗi đăng ký:", err);
    res.status(500).json({ message: "Lỗi máy chủ!" });
  }
});
router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (user.locked)
      return res.status(403).json({ message: "Tài khoản của bạn đã bị khóa" });
    if (!user)
      return res
        .status(400)
        .json({ message: "Sai tên đăng nhập hoặc mật khẩu!" });

    const valid = await user.comparePassword(password);
    if (!valid)
      return res
        .status(400)
        .json({ message: "Sai tên đăng nhập hoặc mật khẩu!" });

    res.json({
      message: "✅ Đăng nhập thành công!",
      user: { username: user.username },
    });
  } catch (err) {
    console.error("❌ Lỗi đăng nhập:", err);
    res.status(500).json({ message: "Lỗi máy chủ!" });
  }
});
module.exports = router;
