const { getAccessToken } = require('./auth');

async function getTrainSchedule() {
  const token = await getAccessToken();

  // Log token (for testing)
  console.log(`Token: ${token}`);

  // Sample train data
  return [
    { id: 1, name: 'Express Line', time: '10:00 AM' },
    { id: 2, name: 'Coastal Train', time: '12:30 PM' },
    { id: 3, name: 'Mountain Express', time: '3:45 PM' },
  ];
}

module.exports = { getTrainSchedule };
