// =======================================================================================
// JavaScript - Funções

function trybe(trybeStudent) {
  let developerPerson = trybeStudent;

  developerPerson.hardSkills = 10;
  developerPerson.softSkills = 10;
  developerPerson.careerSkills = 10;
  developerPerson.tryber = true;

  return developerPerson;
};

let student = {
  name: "Jackson",
  age: 41,
  hardSkills: 8,
  softSkills: 7,
  careerSkills: 7,
  nick: ['jack', 'tio jack', 'jj'],
  address: {
    street: 'Rua tal',
    number: '1234'
  }
};

console.log(trybe(student));
console.log(student);

// =======================================================================================
function sum(num1, num2) {
  return num1 + num2;
}

let a = 45;
let b = 78;
let total = sum(a, b);

console.log(total)