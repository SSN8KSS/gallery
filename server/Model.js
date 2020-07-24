const Promise = require('bluebird');
const connection = require('../database/index.js');

module.exports = {
  // addPhoto: () => {
  //   const query = 'SELECT name, email FROM users WHERE key = ?';
  //   connection.execute(query, ['']);
  // },
  getPhotosByHotel(hotelId) {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM photosByHotel WHERE hotelId= ?';
      connection.execute(query, [hotelId], { prepare: true }, ((err, results) => {
        if (err) {
          reject(err);
        } else {
          console.log(results.rows);
          resolve(results);
        }
      }));
    });
  },

  // putPhotosByHotel: () => {
  //   const query = 'SELECT name, email FROM users WHERE key = ?';
  //   connection.execute(query, ['']);
  // },
  // deletePhoto: () => {
  //   const query = 'SELECT name, email FROM users WHERE key = ?';
  //   connection.execute(query, ['']);
  // },
};
