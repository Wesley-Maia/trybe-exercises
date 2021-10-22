// =======================================================================================
/* 1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } 
representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF 
newEmployees para criar cada pessoa contratada em seu respectivo id . A sua função deve 
receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar 
automaticamente um email no formato nome_da_pessoa@trybe.com. */

const newEmployees = (action) => {
  const employees = {
    id1: action('Pedro Guerra'),  // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: action('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: action('Carla Paiva'),   // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

// Link: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/join

const formData = (name) => {
  const emailName = name.toLowerCase().split(' ').join('_');
  const func = {
    nomeCompleto: name,
    email: `${emailName}@trybe.com`,
  };
  return func;
}

console.log(newEmployees(formData));
