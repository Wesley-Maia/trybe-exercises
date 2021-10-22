// =======================================================================================
// Array.some()

/* 1 - Escreva uma função que dado um array de nomes e um nome retorne true se ele estiver 
contido e caso contrário, retorne false , use some. */

const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  //Adicione seu código aqui
  return arr.some((lista) => lista === name);
}

console.log(hasName(names, 'Ana'));
