const express = require('express');
const cors = require('cors');
const problemsRoute = require('./routes/problems');
const quickProblemsRoute = require('./routes/quickProblems');
const attemptsRoute = require('./routes/attempts');
const quickLeaderboardRoute = require('./routes/quickLeaderboardRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/problems', problemsRoute);
app.use('/api/quick', quickProblemsRoute);
app.use('/api/attempts', attemptsRoute);
app.use('/api/quick/leaderboard', quickLeaderboardRoute);

app.get('/', (req, res) => res.json({ ok: true, message: 'Logic Training API' }));

module.exports = app;