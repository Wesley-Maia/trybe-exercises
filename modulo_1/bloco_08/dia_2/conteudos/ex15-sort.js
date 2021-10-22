// =======================================================================================
// Array.sort

// Ordenação crescente
const points1 = [40, 100, 1, 5, 25, 10];
points1.sort((a, b) => a - b);
console.log(points1); // [1, 5, 10, 25, 40, 100]

// Ordenação decrescente
const points2 = [40, 100, 1, 5, 25, 10];
points2.sort((a, b) => b - a);
console.log(points2); // [ 100, 40, 25, 10, 5, 1 ]
