// =======================================================================================
// Operações Assíncronas

// Faz o nosso código dormir/esperar durante X milisegundos
// const sleep = (sleepDuration) => {
//   const now = new Date().getTime();
//   while(new Date().getTime() < now + sleepDuration);
// };

const funcao1 = (callback) => {
  // sleep(3000); // bloqueante
  setTimeout(() => { // não bloqueante, assincrona
    console.log('1- Big Mac');
    callback();
  }, Math.random() * 5000);
}

const funcao2 = () => {
  // sleep(3000); // bloqueante
  setTimeout(() => { // não bloqueante, assincrona
    console.log('2- Big Tasty');
  }, Math.random() * 5000);
}

console.log('LANCHES');

funcao1(funcao2);

console.log('FIM');
