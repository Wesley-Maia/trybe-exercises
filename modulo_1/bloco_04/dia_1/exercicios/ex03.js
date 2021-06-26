//=======================================================================================
/* 3- Faça um programa que retorne o maior de três números. Defina no começo do programa 
três variáveis com os valores que serão comparados. */

let a = 6;
let b = 8;
let c = 13;

if (a > b && a > c) {
  console.log(`${a} é o maior`)
} else if (b > a && b > c) {
  console.log(`${b} é o maior`)
} else {
  console.log(`${c} é o maior`)
}
