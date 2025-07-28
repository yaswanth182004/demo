let accessToken = null;
let tokenExpiresAt = 0;

async function getAccessToken() {
  const now = Date.now();

  if (accessToken && now < tokenExpiresAt - 60000) {
    return accessToken; // still valid
  }

  // Simulated token response
  const response = {
    access_token: 'mocked_token_12345',
    expires_in: 3600
  };

  accessToken = response.access_token;
  tokenExpiresAt = now + response.expires_in * 1000;
  return accessToken;
}

module.exports = { getAccessToken };
