// Array que será passado para o .sort
const numbers = [10, 21, 1, 3, 30, 2, 11, 23, 12, 22];

// Função callback que será usada para ordenar o array
function order(a, b) {
  return a - b;
}

// Função em que passamos o array numbers como parâmetro. Experimente remover a função passada como parâmetro na linha 12 (order) e veja o que acontece quando tentar fazer o sort novamente.
orderNumbers = (array) => {
  const answer = document.querySelector("#answer");
  const newArray = array.sort(order);
  answer.innerHTML = newArray;
};

const btnSort = document.querySelector("#btn-sort");

btnSort.addEventListener("click", () => orderNumbers(numbers));
