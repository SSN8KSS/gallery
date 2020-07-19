DROP KEYSPACE IF EXISTS gallery;
CREATE KEYSPACE gallery WITH REPLICATION = {'class': 'SimpleStrategy', 'replication_factor': '1'} AND durable_writes = 'true';

USE gallery;

CREATE TABLE photosByHotel (
  id INT,
  hotelId INT,
  description text,
  category text,
  url text,
  name text,
  address text,
  phone text,
  website text,
  cost smallint,
  PRIMARY KEY (hotelId, category) 
);

COPY photosByHotel (id, hotelId, description, category, url,
 name, address, phone, website, cost) FROM '/Users/kimosilva/Documents/hrRepos/ssn8kss/photos-carousel/database/cqlPhotos.csv';
