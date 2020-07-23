const Model = require('./Model.js');

module.exports = {
  getPhotos: (req, res) => {
    Model.getPhotosByHotel(req.body);
  }
};
