function factorial(n) {
    if (n === 0) {
        return 1;
    }
    
    let result = 1;

    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    
    return result;
}


let num = Number(prompt("Введіть число для обчислення факторіалу:"));
console.log(num + "! =" + factorial(num));