const fs = require('fs');
const path = require('path');
const faker = require('faker');

const generateRandomCategory = () => {
  const categories = ['Bedroom', 'Bathroom', 'Amenities', 'Kitchen', 'Panoramas', 'Nearby'];
  return categories[Math.floor(Math.random() * categories.length)];
};

const generateDescription = () => {
  const words = faker.random.words();
  if (words.includes(',')) {
    const newString = words.replace(',', '');
    return newString.replace(',', '');
  }
  return words;
};

const writeStream = fs.createWriteStream(path.join(__dirname, '../database/psqlPhotos.csv'));

function writeOneMillionTimes(writer, callback) {
  let i = 15000000;
  let hotelCount = 1;
  let photoCount = 0;
  function write() {
    let ok = true;
    do {
      i--;
      photoCount++;
      if (i === 0) {
        // Last time!
        const query = `${photoCount}, ${hotelCount}, ${generateDescription()}, ${generateRandomCategory()}, ${faker.image.imageUrl()}\n`;
        writer.write(query, callback);
      } else {
        // See if we should continue, or wait.
        // Don't pass the callback, because we're not done yet.
        if (photoCount % 15 === 0) {
          hotelCount++;
        }
        const query = `${photoCount}, ${hotelCount}, ${generateDescription()}, ${generateRandomCategory()}, ${faker.image.imageUrl()}\n`;
        ok = writer.write(query);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      // Had to stop early!
      // Write some more once it drains.
      writer.once('drain', write);
    }
  }
  write();
}

writeOneMillionTimes(writeStream, () => {
  console.log('Photos CSV created properly');
});
