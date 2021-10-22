// =======================================================================================
// Array.every
// Verifica se todas as pizzas possuem preço menor que 17

const pizzas = [
  { flavor: 'Frango com catupiry', price: 12.30 },
  { flavor: 'Marguerita', price: 13.50 },
  { flavor: 'Gratinada', price: 15.30 },
  { flavor: 'Quatro queijos', price: 16.40 },
];

const priceLessThan13 = pizzas.every(pizza => pizza.price < 17);
console.log(priceLessThan13);
