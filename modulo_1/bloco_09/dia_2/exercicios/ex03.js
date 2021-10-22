// =======================================================================================
// Promise

/* 3- Quando a promise for resolvida com sucesso, retorne o resultado da divisão desse 
número por 2, 3, 5 e 10 em um array. */

const fetchPromise = () => {

  const promise = new Promise((resolve, reject) => {
    const arrayNumbers = []
    const arrayDiv = [2, 3, 5, 10];

    for (let i = 0; i < 10; i += 1) {
      arrayNumbers[i] = Math.floor(Math.random() * 50);
    }

    const arrayNumbersPow2 = arrayNumbers.map((number) => number ** 2);
    const somaArray = arrayNumbersPow2.reduce((acc, number) => acc + number);
    const resulDiv = arrayDiv.map((num) => somaArray / num);


    // console.log(arrayNumbers);
    // console.log(arrayNumbersPow2);
    console.log(somaArray);
    //console.log(resulDiv);

    (somaArray < 8000) ? resolve(resulDiv) : reject();
  });

  promise
  .then(resulDiv => console.log('O resultado da divisão por: 2, 3, 5 e 10: ', resulDiv))
  .catch(() => console.log('Promise rejeitada'));
};

fetchPromise();
