// =======================================================================================
// JavaScript ES6 - Higher Order Functions - reduce

/* 5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a 
maiúscula ou minúscula. */

const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  // escreva seu código aqui
  const charA = names.reduce((result1, name) => {
    const splitname = name.split('');
    const contaA = splitname.reduce((result2, letra) => {
      console.log('Result= ', result2, 'Letra= ', letra)
      return ((letra === 'a' || letra === 'A')? result2 +=1 : result2);
    }, 0);
    console.log('contaA= ', contaA)
    return result1 += contaA;
  }, 0)
  return charA;
}
console.log(containsA());

//assert.deepStrictEqual(containsA(), 20);
