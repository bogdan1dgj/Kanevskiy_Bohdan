let a = Number(prompt("Введіть перше число:"));
let b = Number(prompt("Введіть друге число:"));
let c = Number(prompt("Введіть третє число:"));

let max = a;

if (b > max) {
    max = b;
}
if (c > max) {
    max = c;
}

let min = a;

if (b < min) {
    min = b;
}
if (c < min) {
    min = c;
}

alert("Найбільше: " + max);
alert("Найменше: " + min);

console.log("Найбільше: " + max);
console.log("Найменше: " + min);





let parne = (a % 2 === 0) || (b % 2 === 0) || (c % 2 === 0);

alert("Чи є хоча б одне парне число: " + parne);
console.log("Чи є хоча б одне парне число:", parne);


let condition = (a > b) && (b < c);

alert("Перевірка умови (a > b && b < c): " + condition);
console.log("Перевірка умови:" + condition);


let number = Number(prompt("Введіть число для перевірки чи воно просте:"));
let isPrime = true;

if (number <= 1) {
  ime = false;
} else {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            ime = false;
            break;
        }
    }
}

alert("Число просте: " + ime);
console.log("Число просте:"+ ime);