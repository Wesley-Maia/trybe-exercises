// =======================================================================================

/* 1 - Crie uma função que retorne a string 'Acordando!!'; */
const string1 = () => 'Acordando!!';

/* 2 - Crie outra função que retorne a string 'Bora tomar café!!' ; */
const string2 = () => 'Bora tomar café!!';

/* 3 - Crie mais uma função que retorne a string 'Partiu dormir!!' ; */
const string3 = () => 'Partiu dormir!!';

/* 4 - Agora desenvolva uma HOF chamada doingThings e configure esta função para que 
imprima no console o resultado da execução das funções que você criou nos exemplos 
anterior. */

const doingThings = (wakeUp) => console.log(wakeUp());

// Ao chamar a função doingThings:
doingThings(string1);
doingThings(string2);
doingThings(string3);
// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!