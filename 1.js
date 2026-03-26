let arr = [5, 2, 9, 1, 7];

let sum = arr.reduce((a, b) => a + b, 0);
let average = sum / arr.length;


let max = Math.max(...arr);
let min = Math.min(...arr);

arr.sort((a, b) => a - b);


console.log("Масив:", arr);
console.log("Середнє:", average);
console.log("Максимум:", max);
console.log("Мінімум:", min);