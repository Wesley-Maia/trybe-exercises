const readline = require('readline-sync');
const imc = require('./calculoIMC');

const userName = () => {
  return readline.question("Qual é o seu nome?\nR: ");
}

const userAltura = () => {
  return readline.questionFloat("Qual é sua altura?\nR: ");
}

const userPeso = () => {
  return readline.questionFloat("Qual é seu peso?\nR: ");
}

const nome = userName();
const altura = userAltura();
const peso = userPeso();

const result = imc(peso, altura);

console.log(`Olá, ${nome}, seu IMC é: ${result}`);