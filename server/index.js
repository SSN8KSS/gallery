const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const controller = require('./controller.js');

const app = express();
const port = 3002;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', express.static( path.join(__dirname, '/../client/dist') ) );

// app.get('/:hotelID', (req, res) => {
//   res.sendFile( path.join(__dirname, '/../client/dist/index.html') );
// });

app.get('/api/hotels/:hotelId/photos', (req, res) => {
  controller.getPhotosByHotel(req, res);
});

app.listen(port, () => console.log(`FEC listening on port ${port}`));
