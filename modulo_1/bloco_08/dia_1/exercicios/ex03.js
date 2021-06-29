// =======================================================================================
/* Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas
corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas
da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e 
faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve 
retornar o total da contagem de respostas certas.

- Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 
pontos, e quando não houver resposta ("N.A") não altera-se a contagem. */

const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const check = (array1, array2) => {
  let sum = 0;

  for(let i = 0; i < array1.length; i+= 1){
    if (array1[i] === array2[i]){
      sum += 1;
      console.log('+1')
    } else {
      sum -=0.5;
      console.log('-0.5')
    }
  }

  return sum;
}

//console.log(check(rightAnswers,studentAnswers))

const verificaGab = (gab, rep, func) => func(gab,rep);

console.log(`Resultado: ${verificaGab(rightAnswers,studentAnswers,check)}`);
