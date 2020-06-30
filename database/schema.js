const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  id: String,
  username: String,
  location: String,
  type: String,
  avatarUrl: String,
  rating: Number,
  contributions: Number,
  review: String // will often be the photo caption, unless user type is Management?
});

const photoSchema = new mongoose.Schema({
  id: String,
  albums: [ String ],
  filters: [ String ],
  user: userSchema,
  date: Date,
  caption: String,
  trips: [ String ], // this is the Heart/Favorite feature
  helpful: Number,
  url: String
});

const hotelSchema = new mongoose.Schema({
  id: { type: Number, unique: true },
  name: String,
  photos: [ photoSchema ],
  photoAlbums: [ String ],
  price: Number // the price next to the View Deal button on upper right of full view modal
});
const Hotel = mongoose.model('Hotel', hotelSchema);

module.exports = Hotel;
