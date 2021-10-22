// =======================================================================================
/* 2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um 
número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que 
checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma 
string (Ex: "Tente novamente" ou "Parabéns você ganhou"). */

const sorteio = (number, action) => {
  const min = Math.ceil(1);
  const max = Math.floor(5);
  const result = Math.floor(Math.random() * (max - min + 1)) + min;

  const msg = action(number, result);
  
  return msg;
};

const checaSorteio = (num1, num2) => {
  if (num1 === num2) {
    return `Parabéns você ganhou: aposta = ${num1} e sorteio = ${num2}`;
  }
  else {
    return `Tente novamente: aposta = ${num1} e sorteio = ${num2}`;
  }

}

console.log(sorteio(3, checaSorteio));
