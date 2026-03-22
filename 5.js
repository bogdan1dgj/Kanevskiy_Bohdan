let secretNumber = Math.floor(Math.random() * 100) + 1;

let userNumber;

do {
    userNumber = Number(prompt("Вгадай число від 1 до 100:"));

    if (userNumber < secretNumber) {
        alert("Загадане число більше");
    } else if (userNumber > secretNumber) {
        alert("Загадане число менше");
    } else {
        alert("Вітаємо! Ви вгадали число!");
    }

} while (userNumber !== secretNumber);