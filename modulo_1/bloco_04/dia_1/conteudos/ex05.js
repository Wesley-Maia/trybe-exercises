//=======================================================================================
// switch/case

/* 1- Crie uma variável para armazenar o estado da pessoa candidata no processo seletivo, 
que pode ser: 'aprovada' , 'lista' ou 'reprovada' ; */
status = 'rerovada'

/* 2- Crie uma estrutura condicional com o switch/case que irá imprimir as mensagens do 
exercício anterior se o estado da pessoa candidata for 'aprovada' , 'lista' ou 
'reprovada'. Como default , imprima a mensagem de 'não se aplica' . */

switch (status) {
  case 'aprovada':
    console.log("Parabéns, você foi aprovada(o)!");
    break;
  case 'lista':
    console.log("Você está na nossa lista de espera");
    break;
  case 'reprovada':
    console.log("Você foi reprovada(o)");
    // expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log(`${status} - Status errado!`);
  }
