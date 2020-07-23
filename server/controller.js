const Model = require('./Model.js');

module.exports = {
  getPhotos: (req, res) => {
    const { hotelId } = req.params;
    console.log(hotelId);
    Model.getPhotosByHotel(hotelId)
      .then((photos) => {
        res.status(200).send(photos.rows);
      });
  }
};
