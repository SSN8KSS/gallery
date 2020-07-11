DROP KEYSPACE IF EXISTS hotels;
CREATE KEYSPACE gallery WITH REPLICATION = {'class': 'SimpleStrategy', 'replication_factor': '1'} AND durable_writes = 'true';

CREATE TABLE hotels (
  id UUID,
  name text,
  address text,
  phone text,
  website text,
  cost smallint
)

CREATE TABLE photos (
  id UUID,
  hotelId INT NOT NULL,
  description text,
  url text,
  PRIMARY KEY (id, hotelId) 
)

COPY hotels (id, name, address, phone, website, cost) FROM '/path/to/bigfile.csv'
COPY photos (id, hotelId, description, url) FROM '/path/to/bigfile.csv'