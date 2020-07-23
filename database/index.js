const cassandra = require('cassandra-driver');
const credentials  = require('./credentials.js');

const connection = new cassandra.Client({
  contactPoints: credentials.contactPoints,
  localDataCenter: credentials.localDataCenter,
  keyspace: credentials.keyspace
});

connection.connect()
  .catch((err) => {
    console.error('There was an error when connecting', err);
    return connection.shutdown().then(() => { throw err; });
  });

module.exports = connection;
