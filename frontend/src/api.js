const API_BASE = '/api';

export async function fetchTrainSchedule() {
  const response = await fetch(`${API_BASE}/schedule`);
  if (!response.ok) throw new Error('Error fetching schedule');
  return await response.json();
}
