// =======================================================================================
// Parte I

/* Nestes exercícios você irá implementar HOFs que simulam um turno de batalha em um jogo. 
Você irá criar funções que calculam dano, atualizam status, e ao final, retornam os 
resultados da rodada. */

const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

// =======================================================================================
/* 1 - Crie uma função que retorna o dano do dragão.
- O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo strength 
(dano máximo). */

const dragonAttack = (dragon) => {
  const minDmg = 15;
  // const { strength } = dragon;
  const strength = dragon.strength;
  // console.log(strength)
  const dragonDmg = Math.floor((Math.random() * (strength - minDmg) + minDmg));
  return dragonDmg;
};

// console.log(dragonAttack(dragon))

// =======================================================================================
/* 2 - Crie uma função que retorna o dano causado pelo warrior .
O dano será um número aleatório entre o valor do atributo strength (dano mínimo) e o valor 
de strength * weaponDmg (dano máximo). */

const warriorAttack = (warrior) => {
  const { weaponDmg } = warrior;
  const minDmg = warrior.strength;
  const maxDmg = minDmg * weaponDmg;
  const warriorDamage = Math.floor((Math.random() * (maxDmg - minDmg)) + minDmg);
  return warriorDamage;
};

// console.log(warriorAttack(warrior))

// =======================================================================================
/* 3 - Crie uma função que retorna um objeto com duas chaves e dois valores contendo o 
dano e a mana gasta pelo mago em um turno.
- O dano será um número aleatório entre o valor do atributo intelligence (dano mínimo) e o 
valor de intelligence * 2 (dano máximo).
- A mana consumida por turno é 15. Além disto a função deve ter uma condicional, caso o 
mago tenha menos de 15 de mana o valor de dano recebe uma mensagem (Ex: "Não possui mana 
suficiente") e a mana gasta é 0. */

const mageAttack = (mage) => {
  const danMin = mage.intelligence;
  const danMax = mage.intelligence * 2;
  const mana = mage.mana;
  const turnStats = {
    manaSpent: 0,
    damageDealt: 'Not enough mana...',
  };

  if (mana > 15) {
    const mageDmg = Math.floor((Math.random() * (danMax - danMin) + danMin));
    turnStats.manaSpent = 15;
    turnStats.damageDealt = mageDmg;
    return turnStats;
  }
  return turnStats;
};

// console.log(mageAttack(mage))

// =======================================================================================
// Parte II

/* const gameActions = {
  // Crie as HOFs neste objeto.
}; */

/* 1 - Crie a primeira HOF que compõe o objeto gameActions . Ela será a função que simula 
o turno do personagem warrior . Esta HOF receberá como parâmetro a função que calcula o 
dano deferido pelo personagem warrior e atualizará os healthPoints do monstro dragon. Além 
disto ela também deve atualizar o valor da chave damage do warrior. */

const gameActions = {
  warriorTurn: (warriorAttack) => {
    const warriorDamage = warriorAttack(warrior);
    warrior.damage = warriorDamage;
    dragon.healthPoints -= warriorDamage;
  },
  mageTurn: (mageAttack) => {
    const mageTurnStats = mageAttack(mage);
    const mageDamage = mageTurnStats.damageDealt;
    const { manaSpent } = mageTurnStats;
    mage.damage = mageDamage;
    mage.mana -= manaSpent;
    dragon.healthPoints -= mageDamage;
  },
  monsterTurn: (monsterAttack) => {
    const dragonDamage = monsterAttack(dragon);
    mage.healthPoints -= dragonDamage;
    warrior.healthPoints -= dragonDamage;
    dragon.damage = dragonDamage;
  },
  turnResults: () => battleMembers,
};

gameActions.warriorTurn(warriorAttack);
gameActions.mageTurn(mageAttack);
gameActions.monsterTurn(dragonAttack);
console.log(gameActions.turnResults());
