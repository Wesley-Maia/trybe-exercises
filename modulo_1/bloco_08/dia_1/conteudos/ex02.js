// =======================================================================================

const sum = (num1, num2) => num1 + num2;
const sub = (num1, num2) => num1 - num2;
const mul = (num1, num2) => num1 * num2;
const div = (num1, num2) => num1 / num2;

const calculator = (func) => func(10,5);

console.log(`O resultado da soma é ${calculator(sum)}`);
console.log(`O resultado da subtração é ${calculator(sub)}`);
console.log(`O resultado da multiplicação é ${calculator(mul)}`);
console.log(`O resultado da divisão é ${calculator(div)}`);