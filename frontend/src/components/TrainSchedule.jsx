import React, { useEffect, useState } from 'react';
import { fetchTrainSchedule } from '../api';

const TrainSchedule = () => {
  const [schedule, setSchedule] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadSchedule() {
      try {
        const data = await fetchTrainSchedule();
        setSchedule(data);
      } catch (err) {
        console.error('Error:', err.message);
      } finally {
        setLoading(false);
      }
    }

    loadSchedule();
  }, []);

  if (loading) return <p>Loading schedule...</p>;

  return (
    <div>
      <h2>Train Schedule</h2>
      <ul>
        {schedule.map(train => (
          <li key={train.id}>
            🚆 <strong>{train.name}</strong> — {train.time}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrainSchedule;
