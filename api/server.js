const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT;
const similarArtists = require('../routes/similarArtists');
const cors = require('cors');

app.use(cors());

app.use(express.static('public'));

app.use('/similar-artists', similarArtists);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});