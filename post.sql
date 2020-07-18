DROP DATABASE IF EXISTS sqltripad;
CREATE DATABASE sqltripad;
\connect sqltripad;

CREATE TABLE hotels (
  id SERIAL,
  name VARCHAR(255),
  address VARCHAR(255),
  phone VARCHAR(15),
  website text,
  cost SMALLINT,
  PRIMARY KEY (id)
);

CREATE TABLE photos (
  id SERIAL,
  hotelId INT NOT NULL,
  description text,
  category text,
  url text,
  PRIMARY KEY (id),
  FOREIGN KEY (hotelId) REFERENCES hotels (id)
);

COPY hotels(id, name, address, phone, website, cost) FROM '/Users/kimosilva/Documents/hrRepos/ssn8kss/photos-carousel/database/psqlHotels.csv' DELIMITER ',';
COPY photos(id, hotelId, description, category, url) FROM '/Users/kimosilva/Documents/hrRepos/ssn8kss/photos-carousel/database/psqlPhotos.csv' DELIMITER ',';
