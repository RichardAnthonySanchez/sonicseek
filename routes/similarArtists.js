const axios = require('axios');
const apiKey = process.env.API_KEY;
const api = process.env.LASTFM_API_BASE;

const getSimilarArtists = async (req, res) => {
  const artist = req.query.artist; // Extract artist name from query parameters
  try {
    const response = await axios.get(api, {
      params: {
        method: 'artist.getSimilar',
        artist: artist,
        api_key: apiKey,
        format: 'json',
      },
    });

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
};

module.exports = getSimilarArtists;