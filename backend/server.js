const express = require('express');
const cors = require('cors');
const { getTrainSchedule } = require('./scheduleService');

const app = express();
app.use(cors()); // allow frontend requests
app.use(express.json());

app.get('/api/schedule', async (req, res) => {
  try {
    const data = await getTrainSchedule();
    res.json(data);
  } catch (err) {
    console.error('Error:', err.message);
    res.status(500).json({ error: 'Failed to fetch schedule' });
  }
});

app.listen(5000, () => {
  console.log('🚀 Backend running at http://localhost:5000');
});
