const fs = require('fs');
const path = require('path');
const faker = require('faker');

const generateHotelName = () => {
  const articles = ['', 'The'];
  const randArticle = articles[Math.floor(Math.random() * articles.length)];
  const adj = faker.commerce.productAdjective();
  const nouns = ['Garden', 'Snake', 'Abode', 'Door', 'Mirage', 'Hostel', 'Hotel', 'Inn', 'Boot', 'Barn', 'Towers', 'Resort', 'Sun', 'Desert'];
  const randNoun = nouns[Math.floor(Math.random() * nouns.length)];
  let name = '';
  if (randArticle !== '') {
    name = `${randArticle} ${adj} ${randNoun}`;
  } else {
    name = `${adj} ${randNoun}`;
  }
  return name;
};

const generateAddress = () => `${faker.address.streetAddress()}, ${faker.address.city()}, ${faker.address.stateAbbr()}, ${faker.address.zipCode()}`;

const generatePhone = () => faker.phone.phoneNumberFormat();

const generateWebsite = () => faker.internet.url();

const generateCost = () => Math.floor((Math.random() * 1000) + 20);

const writeStream = fs.createWriteStream(path.join(__dirname, '../database/psqlHotels.csv'));

function writeOneMillionTimes(writer, callback) {
  let i = 1000000;
  function write() {
    let ok = true;
    do {
      i--;
      if (i === 0) {
        // Last time!
        const query = `${generateHotelName()}, ${generateAddress()}, ${generatePhone()}, ${generateWebsite()}, ${generateCost()}\n`;
        writer.write(query, callback);
      } else {
        // See if we should continue, or wait.
        // Don't pass the callback, because we're not done yet.
        const query = `${generateHotelName()}, ${generateAddress()}, ${generatePhone()}, ${generateWebsite()}, ${generateCost()}\n`;
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
