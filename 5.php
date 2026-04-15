<?php
// Змінні з даними
$first_name = "Богдан";
$last_name = "Іваненко";
$year_of_birth = 2008;

// Поточний рік
$current_year = date("Y");

// Обчислюємо вік
$age = $current_year - $year_of_birth;

// Виводимо ПІБ і вік
echo "Ім'я: $first_name $last_name<br>";
echo "Вік: $age років<br>";


// Масив країн
$countries = ["Україна", "Польща", "Німеччина", "Франція"];

// Нумерований список
echo "<ol>";

foreach ($countries as $country) {
    echo "<li>$country</li>";
}

echo "</ol>";


// Асоціативний масив: місто = населення
$cities = [
    "Київ" => 2900000,
    "Львів" => 720000,
    "Одеса" => 1000000,
    "Харків" => 1400000
];

// Виводимо тільки міста з населенням > 1 млн
foreach ($cities as $city => $population) {
    if ($population > 1000000) {
        echo "$city: $population<br>";
    }
}


// Число
$number = 8;

// Перевірка парності
if ($number % 2 == 0) {
    echo "Парне число<br>";
} else {
    echo "Непарне число<br>";
}


// Поточний рік
$year = date("Y");

// Перевірка на високосний рік
if ($year % 4 == 0) {
    echo "Цей рік високосний";
} else {
    echo "Цей рік не високосний";
}
?>