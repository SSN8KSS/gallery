const express = require('express');
const path = require('path');
const connection = require('../database/index.js');

const app = express();
const port = 3002;

connection.connect((err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log('index: cassandra connected');
  }
});

app.use( express.static( path.join(__dirname, '/../client/dist') ) );

// app.get('/:hotelID', (req, res) => {
//   res.sendFile( path.join(__dirname, '/../client/dist/index.html') );
// });

app.get('/api/hotels/:hotelId/photos', (req, res) => {
  Hotels.getPhoto({ id: req.params.hotelId })
    .then( hotels => res.status(200).send(hotels[0]) );
});

app.listen(port, () => console.log(`FEC listening on port ${port}`));
