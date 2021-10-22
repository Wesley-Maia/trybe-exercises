// =======================================================================================
// Bônus
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// =======================================================================================
/* 1- Ordene o array numbers em ordem crescente e imprima seus valores */
for (let index = 1; index < numbers.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (numbers[index] < numbers[secondIndex]) {
        let position = numbers[index];
        numbers[index] = numbers[secondIndex];
        numbers[secondIndex] = position;
      }
    }
  }
  console.log(numbers)

// =======================================================================================
/* 2- Ordene o array numbers em ordem decrescente e imprima seus valores */
for (let index = 1; index < numbers.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (numbers[index] > numbers[secondIndex]) {
        let position = numbers[index];
        numbers[index] = numbers[secondIndex];
        numbers[secondIndex] = position;
      }
    }
  }
  console.log(numbers);

// =======================================================================================
/* 3- Agora crie um novo array a partir do array numbers , sem perdê-lo. Cada valor do 
novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo 
seguinte. */
let arrayNum = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let novoArray = [];
for (let index = 0; index < arrayNum.length-1; index += 1) {
  novoArray[index] = arrayNum[index]*arrayNum[index+1];
}

novoArray.push(arrayNum[arrayNum.length-1]*2)
console.log(novoArray);
