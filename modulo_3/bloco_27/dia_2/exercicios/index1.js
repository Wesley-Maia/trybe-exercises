// =====================================================================
// 1- Crie uma função que recebe três parâmetros retorna uma Promise .
// - Caso algum dos parâmetros recebidos não seja um número, rejeite a Promise com o motivo "Informe apenas números" .
// - Caso todos os parâmetros sejam numéricos, some os dois primeiros e multiplique o resultado pelo terceiro ( (a + b) * c ).
// - Caso o resultado seja menor que 50, rejeite a Promise com o motivo "Valor muito baixo"
// - Caso o resultado seja maior que 50, resolva a Promise com o valor obtido.

function operation(num1, num2, num3) {
  return new Promise((resolve, reject) => {
    // Verifica o tipo dos parâmetros
    if(typeof num1 !== 'number' || typeof num2 !== 'number' || typeof num3 !== 'number') {
      reject('Informe apenas números')
    }

    const result = (num1 + num2) * num3;

    if(result < 50) {
      reject('Valor muito baixo');
    }

    resolve(result);
  });
}

// Testar a função
operation(10,10,10)
  .then(resolve => console.log(resolve))
  .catch(error => console.log(error))

operation(10,10,'a')
  .then(resolve => console.log(resolve))
  .catch(error => console.log(error))

operation(1,1,1)
  .then(resolve => console.log(resolve))
  .catch(error => console.log(error))
  