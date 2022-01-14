const readline = require('readline-sync');

// Criamos uma função para poder utilzar early return
function logResultado(numero, resposta) {
  // Aqui, utilizamos o return para interromper a execução da função
  // Esse é o padrão de código conhecido com early return, ou seja:
  // retornamos "mais cedo" pois uma determinada condição (no caso, a resposta estar certa)
  // não foi atingida.
  if (numero !== resposta) {
    return console.log(`Opa, não foi dessa vez. O número era ${numero}`);
  }

  // Como o if da linha acima tem um `return`, não precisamos do `else`, já que, se a execução
  // do código entrar no if, a linha abaixo não será executada
  return console.log('Parabéns, número correto!');
}

function runGame() {
  const numero = parseInt(Math.random() * 10);

  const resposta = readline.questionInt(
    'Digite um número entre 0 e 10 para saber se é o número que estou pensando: '
  );

  logResultado(numero, resposta);

  const novamente = readline.question(
    'Deseja jogar novamente? (Digite s para sim, e qualquer outra coisa para não) '
  );

  // Mais uma vez, utilizamos um return para interromper a execução do código mais cedo,
  // o que elimina a necessidade do else
  if (novamente !== 's') return console.log('OK, até a próxima!');

  // Chamamos a mesma função para executar novamente o jogo.
  // Uma função que chama a si mesma é chamada de função **recursiva**
  runGame();
}

// Executamos o jogo pela primeira vez
runGame();
