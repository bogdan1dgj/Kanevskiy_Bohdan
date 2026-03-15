let a = prompt("Ім'я:");
let b = Number(prompt("Рік народження:"));
let c = prompt("Ваше місто:");

let year = 2026; 
let age = year - b;

console.log("Ім'я:", a);
console.log("Місто:", c);
console.log("Ваш вік:", age);

if (age <= 12) {
    console.log("Ви дитина");
} 
else if (age <= 17) {
    console.log("Ви підліток");
} 
else if (age <= 59) {
    console.log("Ви дорослий");
} 
else {
    console.log("Ви літня людина");
}

let capital = "Київ";

if (c === capital) {
    console.log("Ви живете у столиці України.");
} else {
    console.log("Ваше місто не є столицею України.");
}