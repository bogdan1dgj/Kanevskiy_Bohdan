<?php
// Вартість трьох товарів
$price1 = 200;
$price2 = 150;
$price3 = 300;

// Рахуємо загальну суму
$total = $price1 + $price2 + $price3;

echo "Загальна вартість: $total грн<br>";

// Масив улюблених фільмів
$movies = ["Child genius", "Titanic", "Avatar", "Interstellar", "Joker"];

// Вивід через foreach
foreach ($movies as $movie) {
    echo "Фільм: $movie.<br>";
}


// Асоціативний масив користувача
$user = [
    "login" => "admin",
    "password" => "1234",
    "email" => "admin@gmail.com"
];

// Виводимо всі значення
foreach ($user as $key => $value) {
    echo "$key: $value<br>";
}


// Якщо сума більше 500 грн → знижка 10%
if ($total > 500) {
    $discount = $total * 0.10;   // 10% від суми
    $final = $total - $discount; // кінцева сума
    echo "Знижка: $discount грн<br>";
    echo "До оплати: $final грн<br>";
} else {
    echo "Знижка не надається<br>";
}

// Правильні дані
$correct_login = "admin";
$correct_password = "1234";

// Введені дані
$input_login = "admin";
$input_password = "1234";

// Перевірка через логічний оператор AND
if ($input_login === $correct_login && $input_password === $correct_password) {
    echo "Вхід успішний";
} else {
    echo "Невірний логін або пароль";
}
?>