let products = [
    { name: "Яблуко", category: "Фрукти" },
    { name: "Банан", category: "Фрукти" },
    { name: "Хліб", category: "Випічка" },
    { name: "Молоко", category: "Напої" },
    { name: "Сир", category: "Молочні продукти" },
    { name: "Круасан", category: "Випічка" }
];

let grouped = {};

for (let i = 0; i < products.length; i++) {
    let cat = products[i].category;
    if (!grouped[cat]) {
        grouped[cat] = [];
    }
    grouped[cat].push(products[i].name);
}

for (let category in grouped) {
    console.log(category + ": " + grouped[category].join(", "));
}