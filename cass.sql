DROP KEYSPACE IF EXISTS hotels;
CREATE KEYSPACE gallery WITH REPLICATION = {'class': 'SimpleStrategy', 'replication_factor': '1'} AND durable_writes = 'true';

CREATE TABLE photos (
  id UUID,
  hotelId INT NOT NULL,
  description text,
  url text,
  PRIMARY KEY (id, hotelId) 
)

COPY photos (id, hotelId, description, url) FROM '/path/to/bigfile.csv'