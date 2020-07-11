DROP DATABASE IF EXISTS sqltripad;
CREATE DATABASE sqltripad;
USE sqltripad;

CREATE TABLE hotels (
  id SERIAL,
  name VARCHAR(255),
  address VARCHAR(255),
  phone VARCHAR(10),
  website text,
  cost SMALLINT,
  PRIMARY KEY (id)
);

CREATE TABLE photos (
  id SERIAL,
  hotelId INT NOT NULL,
  description text,
  url text,
  PRIMARY KEY (id),
  FOREIGN KEY (hotelId) REFERENCES hotels (id)
);

-- COPY hotels (id, name, address, phone, website, cost) FROM '/path/to/bigol/file.csv'
-- COPY photos (id, hotelId, url) FROM '/path/to/other/bigfile.csv'
