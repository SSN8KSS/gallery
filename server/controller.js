const Model = require('./Model.js');

module.exports = {
  addPhoto: (req, res) => {
    Model.addPhoto(req.body);
  }
};
