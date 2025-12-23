require('dotenv').config();

const app = require('./app');
const connectDB = require('./config/db');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const logicRoutes = require('./routes/problems');
const explanationRoutes = require('./routes/explanation');
const adminRoutes = require('./routes/admin');
const adminLogicRouter = require('./routes/adminLogic');
const adminQuickRouter = require('./routes/adminQuick');

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb+srv://lequocnhat43_db_user:nhat200621@cluster0.0hgziws.mongodb.net/logic-training?retryWrites=true&w=majority';
const QuickLeaderboard = require('./models/QuickLeaderboard');
const express = require('express');
const quickLeaderboardRoutes = require('./routes/quickLeaderboardRoutes');

app.get('/api/quick/leaderboard', async (req, res) => {
  const top = await QuickLeaderboard.find().sort({ score: -1, time: 1 }).limit(10);
  res.json(top);
});
app.post('/api/quick/leaderboard', async (req, res) => {
  const { name, score, time } = req.body;
  if (!name || score == null || time == null) {
    return res.status(400).json({ message: 'Thiếu dữ liệu!' });
  }

  const newEntry = new QuickLeaderboard({ name, score, time });
  await newEntry.save();
  res.json({ message: '✅ Lưu thành công!', entry: newEntry });
});
app.use(cors());
app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/problems', logicRoutes);
app.use('/api/explain', explanationRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/admin/logic', adminLogicRouter);
app.use('/api/admin/quick', adminQuickRouter);
app.use(express.static('../frontend'));

connectDB(MONGO_URI).then(() => {
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
app.use('/api/problems', require('./routes/problems'));
app.use('/api/scores', require('./routes/scoreRoutes'));
app.use('/api/quick/leaderboard', quickLeaderboardRoutes);
app.use(express.json());
app.use(express.static('../frontend'));
});
