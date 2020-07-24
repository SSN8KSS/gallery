const Model = require('./Model.js');

module.exports = {
  getPhotosByHotel: (req, res) => {
    Model.getPhotosByHotel(req.params.hotelId)
      .then((photos) => {
        res.status(200).send(photos.rows);
      })
      .catch((err) => {
        if (err) {
          console.log(err);
        }
      });
  }
};
