// =======================================================================================
// Array.sort
// Organiza os números em ordem crescente

const numbers = [8, 5, 9, 3, 1, 7, 4, 2, 6, 10];

/* const compara = (num1, num2) => {
  if(num1 < num2) {
    return -1;
  } else if(num1 > num2) {
    return 1;
  }
  else {
    return 0
  }
} */

/* const compara = (num1, num2) => {
  return num1 - num2;
} */

// console.log(numbers.sort(compara));

numbers.sort((a, b) => a-b);

console.log(numbers)
