// =======================================================================================
// Array.sort

/* 2 - Modifique o sort do exercício anterior para que ordene o array pela idade das 
pessoas em ordem decrescente. */

const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];
  
  function order(a, b) {
    return b.age - a.age;
  }
  // Adicione se código aqui
  people.sort(order);
  
  console.log(people);
  