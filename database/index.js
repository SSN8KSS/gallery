const mongoose = require('mongoose');

mongoose.connect(
  'mongodb://localhost/fec',
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }
);

const db = mongoose.connection;

db.on('error', () => console.log('db connection error'));
db.once('open', () => console.log('db connected'));

module.exports = db;
