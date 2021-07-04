// =======================================================================================
// JavaScript ES6 - Higher Order Functions - reduce

/* Neste exemplo, serão comparados valores para buscar o maior valor em um array. */
const numbers = [50, 85, -30, 3, 15];

const getBigger = (bigger, number) => {
  console.log(`Bigger: ${bigger}`);
  console.log(`Number: ${number}`);
  return ((bigger > number) ? bigger : number);
}
const bigger = numbers.reduce(getBigger, 0);
console.log(bigger); // 85

/* A função passada agora pode possuir dois tipos de retorno:
1- O retorno do próprio acumulador bigger (no caso true do ternário), o que significa que 
ele não será modificado; ou
2- O valor do elemento do array, number , que indica que possui um valor maior que bigger. 
*/
