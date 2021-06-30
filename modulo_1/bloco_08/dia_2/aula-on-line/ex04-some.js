// =======================================================================================
// Array.some
// Procura se existe alguma pizza com preço menor que 13

const pizzas = [
  { flavor: 'Frango com catupiry', price: 12.30 },
  { flavor: 'Marguerita', price: 13.50 },
  { flavor: 'Gratinada', price: 15.30 },
  { flavor: 'Quatro queijos', price: 16.40 },
];

const priceLessthan13 = (pizzasArray) => {
  return pizzasArray.some((pizza) => {
    return pizza.price < 13
  });
}

console.log(priceLessthan13(pizzas));

/* const priceLessThan13 = pizzas.some(pizza => pizza.price < 13);
console.log(priceLessThan13); */
