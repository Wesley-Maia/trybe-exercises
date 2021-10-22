// =======================================================================================
// JavaScript ES6 - Introdução a Higher Order Functions

const person = {
  name: 'Carol',
  lastName: 'Santos',
}

const greetingPeople = (abc) => {
  console.log(`Olá ${abc.name}, como vai?`);
}

greetingPeople(person);
