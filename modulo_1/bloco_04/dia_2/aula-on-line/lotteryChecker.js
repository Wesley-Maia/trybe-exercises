// =======================================================================================
// Lottery Checker

let firstNumber = Math.ceil(Math.random() * 60);
let secondNumber = Math.ceil(Math.random() * 60);
let thirdNumber = Math.ceil(Math.random() * 60);
let fourthNumber = Math.ceil(Math.random() * 60);
let fifthNumber = Math.ceil(Math.random() * 60);
let sixthNumber = Math.ceil(Math.random() * 60);

let lotteryNumbers = [firstNumber, secondNumber, thirdNumber, fourthNumber, fifthNumber, sixthNumber];

let firstGame = [23, 56, 34, 45, 12, 44];
// let secondGame = [23, 56, 34, 45, 12, 44];
// let thirdGame = [23, 56, 34, 45, 12, 44];

// let allGames = [firstGame, secondGame, thirdGame]

let numberOfHits = 0;

for(let indexLottery = 0; indexLottery < lotteryNumbers.length; indexLottery += 1){
  for(let indexGame = 0; indexGame < firstGame.length; indexGame += 1){
    if(lotteryNumbers[indexLottery] === firstGame[indexGame]){
      numberOfHits += 1;
    }
  };
};

console.log(`Numeros sorteados: ${lotteryNumbers}`);
console.log(`Jogo 1: ${firstGame}`);
console.log(`Numeros de acertos: ${numberOfHits}`);
