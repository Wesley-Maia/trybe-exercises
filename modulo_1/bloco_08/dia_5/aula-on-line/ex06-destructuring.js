// =======================================================================================
const assert = require('assert');

const bestGuyInTheWorld = {
  name: 'Rodrigo Hilbert',
  birthplace: 'Orleans, Santa Catarina',
  city: 'São Paulo',
  jobs: ['Ator', 'Modelo', 'Cozinheiro', 'Caçador', 'Sniper', 'Piloto de Caça']
};

const [job1, job2, job3, ...restJobs] = bestGuyInTheWorld.jobs

console.log(job1);
console.log(job2);
console.log(job3);
console.log(restJobs);

// const name = bestGuyInTheWorld.name;
// const birthplace = bestGuyInTheWorld.birthplace;

const { name: fullName, birthplace } = bestGuyInTheWorld;  // alias

const expectedValue = 'Rodrigo Hilbert de Orleans, Santa Catarina';
assert.strictEqual(`${fullName} de ${birthplace}`, expectedValue);
