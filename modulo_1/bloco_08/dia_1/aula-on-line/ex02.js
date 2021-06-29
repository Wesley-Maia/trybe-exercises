// =======================================================================================
// JavaScript ES6 - Introdução a Higher Order Functions

const person = {
  name: 'Carol',
  lastName: 'Santos',
  /* greet: (functionParam) => functionParam() */
}

const formalGreeting = () => {
  console.log(`Olá, como vai?`);
}

const badMoodGreeting = () => {
  console.log(`Não fale comigo!`);
}

person.greet = (functionParam) => {
  return functionParam();
}

person.greet(formalGreeting);
person.greet(badMoodGreeting);
