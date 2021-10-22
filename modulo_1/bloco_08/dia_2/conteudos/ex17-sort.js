// =======================================================================================
// Array.sort

/* 1- Utilize a sort para ordenar o array pela idade das pessoas em ordem crescente . */

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

function order(a, b) {
  return a.age - b.age;
}
// Adicione se código aqui
people.sort(order);

console.log(people);
