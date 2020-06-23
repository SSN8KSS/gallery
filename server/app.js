const express = require('express');
// const db = require('../database/index.js');
const Hotels = require('../database/schema.js');
// const seed = require('../database/seedData.js');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  console.log('GET RECEIVED');
  res.send('hey');
});

app.get('/api/:hotelID/photos', (req, res) => {
  Hotels.find({ id: req.params.hotelID })
    .then(data => res.status(200).send(data));
});

app.listen(port, () => console.log(`listening on port ${port}`));
