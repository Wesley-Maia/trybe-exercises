// =======================================================================================
// JavaScript ES6 - Higher Order Functions - reduce


const numbers = [32, 15, 3, 2, -5, 56, 10];

const getSum = (result, number) => {
  console.log(result); // 0 32 47 50 52 47 103
  return result + number;
};
// Altere o parâmetro de 0 para 10 e analise o resultado
const sumNumbers = numbers.reduce(getSum, 0); // Parâmetro adicionado ao reduce: o "0"
console.log(`Resultado = ${sumNumbers}`); // 113
