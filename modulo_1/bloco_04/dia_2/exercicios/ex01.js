// =======================================================================================
// Fixar conhecimentos em JavaScript - Array e loop For 

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// =======================================================================================
/* 1- percorra o array imprimindo todos os valores nele contidos com a função 
console.log() */
console.log("====Parte 1====");
for(let i=0; i<numbers.length; i+=1){
  console.log(numbers[i]);
}

// =======================================================================================
/* 2- some todos os valores contidos no array e imprima o resultado */
console.log("====Parte 2====");
let sum = 0;
for(let i=0; i<numbers.length; i+=1){
  sum += numbers[i];
}
console.log("A soma é",sum);

// =======================================================================================
/* 3- calcule e imprima a média aritmética dos valores contidos no array */
console.log("====Parte 3====");
let soma = 0;
let mean = 0;
for(let i=0; i<numbers.length; i+=1){
  soma += numbers[i];
}
mean = soma/(numbers.length);
console.log("A média é", mean);
// =======================================================================================
/* 4- Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, 
imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor 
ou igual a 20" */
console.log("====Parte 4====");
if(mean>20){
  console.log("valor maior que 20");
}
else{
  console.log("valor menor que 20");
}

// =======================================================================================
/* 5- Utilizando for , descubra qual o maior valor contido no array e imprima-o */
console.log("====Parte 5====");
let numberMaior = 0;
for(let i=0; i<numbers.length; i+=1){
  if(numbers[i]>numberMaior){
    numberMaior = numbers[i];
  }
}
console.log("O maior número é:", numberMaior);

// =======================================================================================
/* 6- Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não 
exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado" */
console.log("====Parte 6====");
let resto = 0;
let conta = 0;
for(let i=0; i<numbers.length; i+=1){
  resto = numbers[i]%2;
  if(resto != 0){
    conta+=1;
  }
}
if(conta==0){
  console.log("nenhum valor ímpar encontrado");
}
else{
  console.log("Quantidade valores ímpares:", conta);
}

// =======================================================================================
/* 7- Utilizando for , descubra qual o menor valor contido no array e imprima-o */
console.log("====Parte 7====");
let numberMenor = numbers[0];
for(let i=0; i<numbers.length; i+=1){
  if(numbers[i]<numberMenor){
    numberMenor = numbers[i];
  }
}
console.log("O menor número é:", numberMenor);

// =======================================================================================
/* 8- Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado */
console.log("====Parte 8====");
let numberArray = [];
for(let i=0; i<25; i+=1){
  numberArray[i] = i+1;
}
console.log(numberArray);

// =======================================================================================
/* 9- Utilizando o array criado no exercício anterior imprima o resultado da divisão de 
cada um dos elementos por 2 */
console.log("====Parte 9====");
let divNumber = 0;
for(let i=0; i<25; i+=1){
  divNumber = numberArray[i]/2;
  console.log("O resultado da divisão é:",divNumber);
}
