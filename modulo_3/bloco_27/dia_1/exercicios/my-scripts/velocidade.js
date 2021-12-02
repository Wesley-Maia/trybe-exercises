const readline = require('readline-sync');

function calVelocidadeMedia () {
  const d = readline.questionInt('Distância percorrida (m): ');
  const t = readline.questionInt('Tempo gasto (s): ');
  
  const velocidadeMedia = (d / t).toFixed(2);
  
  console.log(`Velocidade média: ${velocidadeMedia} m/s`);
}

calVelocidadeMedia();
