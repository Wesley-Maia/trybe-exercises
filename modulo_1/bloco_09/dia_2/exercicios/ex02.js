// =======================================================================================
// Promise

/* 2- Agora, um passo para trás: vamos fazer, passo a passo, uma Promise

- Primeiramente, instancie uma Promise . Dentro dela, você deve produzir um array com dez 
números aleatórios de 1 a 50 e elevá-los todos ao quadrado.
- Se a soma de todos esses elementos for inferior a 8000, a promise deve ser resolvida. 
Caso contrário, ela deve ser rejeitada.
- Acresça um then e um catch à Promise com qualquer coisa dentro só para que o código 
funcione. */

const fetchPromise = () => {

  const promise = new Promise((resolve, reject) => {
    const arrayNumbers = []
    for (let i = 0; i < 10; i += 1) {
      arrayNumbers[i] = Math.floor(Math.random() * 50);
    }

    const arrayNumbersPow2 = arrayNumbers.map((number) => number ** 2);
    const somaArray = arrayNumbersPow2.reduce((acc, number) => acc + number);

    console.log(arrayNumbers);
    console.log(arrayNumbersPow2);
    console.log(somaArray);

    (somaArray < 8000) ? resolve() : reject();
  });

  promise
    .then(() => console.log('Promise resolvida'))
    .catch(() => console.log('Promise rejeitada'));
};

fetchPromise();
