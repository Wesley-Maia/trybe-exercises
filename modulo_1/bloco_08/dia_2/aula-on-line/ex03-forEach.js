// =======================================================================================
// Array.forEach
// Imprime todos os sabores de pizza com os respectivos preços

const pizzas =[
  {flavor: 'Frango com catupiry', price: 12.30},
  {flavor: 'Marguerita', price: 13.50},
  {flavor: 'Gratinada', price: 15.30},
  {flavor: 'Quatro queijos', price: 16.40},
];

pizzas.forEach((sabor) => {
  console.log(`Sabor: ${sabor.flavor} - Preço: ${sabor.price}`)
});
