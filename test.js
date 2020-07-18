const generate = () => {
  const string = 'this is also a test';
  const newString = string.replace(',', '');
  return newString.replace(',', '');
};

console.log(generate());
