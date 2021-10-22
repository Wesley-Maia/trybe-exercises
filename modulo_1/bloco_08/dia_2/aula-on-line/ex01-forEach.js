// =======================================================================================
// Array.forEach
// Imprime todas as letras contidas no Array letters utilizando o forEach

const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];

letters.forEach((elemento, index) => {
  console.log(`${index} - ${elemento}`);
});
