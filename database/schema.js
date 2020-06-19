const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  id: { type: String, unique: true },
  name: String,
  location: String,
  type: String,
  avatarURL: String,
  rating: Number,
  contributions: Number,
  review: String // will often be the photo caption, unless user type is Management?
});
const User = mongoose.model('User', userSchema);

const photoSchema = new mongoose.Schema({
  id: { type: String, unique: true },
  albums: [ String ],
  filters: [ String ],
  user: userSchema,
  date: Date,
  caption: String,
  trips: [ String ], // this is the Heart/Favorite feature
  helpful: Number,
  URL: String
});
const Photo = mongoose.model('Photo', photoSchema);

const hotelSchema = new mongoose.Schema({
  id: { type: String, unique: true },
  photos: [ photoSchema ],
  photoAlbums: [ String ],
  price: Number // the price next to the View Deal button on upper right of full view modal
});
const Hotel = mongoose.model('Hotel', hotelSchema);

module.exports = { User, Photo, Hotel };
