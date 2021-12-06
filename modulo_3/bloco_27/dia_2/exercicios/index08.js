// 9- Escreva uma função que receba um número inteiro maior que 0 e retorne uma Promise.
// - Se o número for múltiplo de 3, resolva a Promise com o valor "Fizz".
// - Se o número for múltiplo de 5, resolva a Promise com o valor "Buzz".
// - Se o número for múltiplo de 3 e 5, resolva a Promise com o valor "FizzBuzz".
// - Caso contrário, rejeite a Promise com o valor do número.

// Começamos criando uma função que recebe um número e retorna uma Promise.
function fizzBuzz (number) {
  return new Promise((resolve, reject) => {

    // Agora, adicionamos as regras de negócio.
    if (number % 3 === 0 && number % 5 === 0) {
      return resolve('FizzBuzz');
    }

    if (number % 3 === 0) {
      return resolve('Fizz');
    }

    if (number % 5 === 0) {
      return resolve('Buzz');
    }

    reject(number);
  })
}

// Chamamos a função para garantir que a lógica está correta
fizzBuzz(1).catch(console.error); // Deve escrever "1" no console
fizzBuzz(3).then(console.log); // Deve escrever "Fizz" no console
fizzBuzz(5).then(console.log); // Deve escrever "Buzz" no console
fizzBuzz(15).then(console.log); // Deve escrever "FizzBuzz" no console
