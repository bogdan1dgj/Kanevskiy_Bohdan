const names = ["Іван", "Марія", "Олег", "Анна"];

const result = {};

for (let i = 0; i < names.length; i++) {
  const name = names[i];
  result[name] = name.length;
}

console.log(result);