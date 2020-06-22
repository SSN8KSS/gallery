const mongoose = require('mongoose');

mongoose.connect(
  `mongodb://localhost/fec`,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }  // 2nd arg b/c terminal asked me to lmao
);

const db = mongoose.connection;

db.on('error', () => console.log('db connection error'));
db.once('open', () => console.log('db connected'));

module.exports = db;
