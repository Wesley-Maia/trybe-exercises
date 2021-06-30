// =======================================================================================
// Array.find
// Procura se existe alguma pizza com preço menor que 15 e retorna a primeira possibilidade

const pizzas = [
    { flavor: 'Frango com catupiry', price: 18.30 },
    { flavor: 'Marguerita', price: 13.50 },
    { flavor: 'Gratinada', price: 15.30 },
    { flavor: 'Quatro queijos', price: 16.40 },
  ];
  
  const priceLessThan13 = pizzas.find(pizza => pizza.price < 15);
  console.log(priceLessThan13);
  