// =======================================================================================
// Promise

/* 5- Quando a Promise for bem-sucedida, encadeie nela uma segunda Promise que some os 
elementos do array. */

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

    (somaArray < 8000) ? resolve(somaArray) : reject();
  });

  promise
    .then(sum => [2, 3, 5, 10].map(number => sum / number))
    .then(array => array.reduce((acc, number) => {
      console.log('Array #', number);
      return number + acc;}, 0))
    .then(array => console.log('Soma - ', array))
    .catch(() => console.log('É mais de oito mil! Essa promise deve estar quebrada!'));
};

fetchPromise();
