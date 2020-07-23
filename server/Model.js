const connection = require('../database/index.js');

module.exports = {
  // addPhoto: () => {
  //   const query = 'SELECT name, email FROM users WHERE key = ?';
  //   connection.execute(query, ['']);
  // },
  getPhotosByHotel: () => {
    const query = 'SELECT id, email FROM users WHERE key = ?';
    connection.execute(query, ['']);
  },
  putPhotosByHotel: () => {
    const query = 'SELECT name, email FROM users WHERE key = ?';
    connection.execute(query, ['']);
  },
  deletePhoto: () => {
    const query = 'SELECT name, email FROM users WHERE key = ?';
    connection.execute(query, ['']);
  },
};
