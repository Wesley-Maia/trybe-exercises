// =======================================================================================
// Promise

/* 4- Quando a Promise for rejeitada, imprima, via console.log , a frase "É mais de oito 
mil! Essa promise deve estar quebrada!" */

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
		.then(somaArray => {
			const result = [2, 3, 5, 10].map(number => {
				console.log(number);
				console.log(somaArray);
				return somaArray / number
			});
			console.log(result);
			return result
		})
		.then(array => console.log(array))
		.catch(() => console.log('É mais de oito mil! Essa promise deve estar quebrada!'));
};

fetchPromise();
