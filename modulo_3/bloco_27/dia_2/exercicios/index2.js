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
  
// =====================================================================
// 2- Escreva um código para consumir a função construída no exercício anterior.
// - Gere um número aleatório de 1 a 100 para cada parâmetro que a função recebe. Para gerar um número aleatório, utilize o seguinte trecho de código: Math.floor(Math.random() * 100 + 1) .
// - Chame a função do exercício anterior, passando os três números aleatórios como parâmetros.
// - Utilize then e catch para manipular a Promise retornada pela função:
// - Caso a Promise seja rejeitada, escreva na tela o motivo da rejeição.
// - Caso a Promise seja resolvida, escreva na tela o resultado do cálculo.
  
function randomNumbers() {
  return Math.floor(Math.random() * 100 + 1);
}
  
function arrayNumbers() {
  /* Criamos um novo array de 3 posições
   * e utilizamos o `map` para gerar um número aleatório
   * para cada posição do Array
   */
  const arrayRandom = Array.from({length: 3}).map(randomNumbers);
  
  // console.log(arrayRandom);
 
  operation(...arrayRandom)
    .then(result => console.log(result))
    .catch(err => console.log(err))
}
  
arrayNumbers();
