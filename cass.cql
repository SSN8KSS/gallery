DROP KEYSPACE IF EXISTS hotels;
CREATE KEYSPACE gallery WITH REPLICATION = {'class': 'SimpleStrategy', 'replication_factor': '1'} AND durable_writes = 'true';

CREATE TABLE photosByHotel (
  id UUID,
  hotelId INT NOT NULL,
  description text,
  category text,
  url text,
  name text,
  address text,
  phone text,
  website text,
  cost smallint,
  PRIMARY KEY (hotelId, category) 
)

COPY photosByHotel (id, hotelId, description, category, url,
 name, address, phone, website, cost) FROM '/path/to/bigfile.csv'
