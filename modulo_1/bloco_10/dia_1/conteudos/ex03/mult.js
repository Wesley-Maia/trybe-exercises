const multiplyByTwo = (number) => {
  if (!number) {
    throw new Error('number é indefinido')
  }
  return number * 2;
};

// console.log(multiplyByTwo(4))

module.exports = multiplyByTwo;
