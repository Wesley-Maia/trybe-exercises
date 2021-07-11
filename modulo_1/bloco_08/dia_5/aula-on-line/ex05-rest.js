// =======================================================================================
const assert = require('assert');
// '1981', '7', '31', ['22', '47', '12']
const formatDate = (year, month, day, ...rest) => {
  // console.log(rest);
  return `${day}/${month}/${year} - ${rest[0]}:${rest[1]}:${rest[2]}`;
  // ${rest.join(':')}
};

const dateInfo = ['1981', '7', '31', '22', '47', '12'];

// const formattedDate = formatDate('1981', '7', '31', '22', '47', '12');
// console.log(formattedDate);

// console.log(   formatDate(...dateInfo)   );
console.log(formatDate('1981', '7', '31', '22', '47', '12'));

const expectedValue = '31/7/1981 - 22:47:12';
assert.strictEqual(formatDate(...dateInfo), expectedValue);
    // Quando ulizamos a função temos um SPREAD
