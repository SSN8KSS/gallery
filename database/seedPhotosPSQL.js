const fs = require('fs');
const path = require('path');
const faker = require('faker');

const generateRandomCategory = () => {
  const categories = ['Bedroom', 'Bathroom', 'Amenities', 'Kitchen', 'Panoramas', 'Nearby'];
  return categories[Math.floor(Math.random() * categories.length)];
};

const writeStream = fs.createWriteStream(path.join(__dirname, '../database/psqlPhotos.csv'));

function writeOneHundredTimes(writer, callback) {
  let i = 100;
  function write() {
    let ok = true;
    do {
      i--;
      if (i === 0) {
        // Last time!
        const query = `${faker.random.words()}, ${generateRandomCategory()}, ${faker.image.imageUrl()}\n`;
        writer.write(query, callback);
      } else {
        // See if we should continue, or wait.
        // Don't pass the callback, because we're not done yet.
        const query = `${faker.random.words()}, ${generateRandomCategory()}, ${faker.image.imageUrl()}\n`;
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

writeOneHundredTimes(writeStream, () => {
  console.log('Photos CSV created properly');
});
