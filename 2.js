let people = [
    { username: "Андрій", age: 16 },
    { username: "Софія", age: 21 },
    { username: "Максим", age: 19 },
    { username: "Оксана", age: 17 }
];

let adultsList = [];

for (let i = 0; i < people.length; i++) {
    if (people[i].age > 18) {
        adultsList.push(people[i]);
    }
}

let namesList = [];

for (let i = 0; i < people.length; i++) {
    namesList.push(people[i].username);
}

let totalAge = 0;

for (let i = 0; i < people.length; i++) {
    totalAge += people[i].age;
}

let averageAge = totalAge / people.length;

console.log("Всі люди:", people);
console.log("Повнолітні:", adultsList);
console.log("Імена:", namesList);
console.log("Середній вік:", averageAge);