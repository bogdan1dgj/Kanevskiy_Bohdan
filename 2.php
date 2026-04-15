<?php
// Оголошуємо змінні
$a = 5;
$b = 10;

// Виконуємо математичні операції
$sum = $a + $b;        
$diff = $a - $b;       
$mult = $a * $b;       
$div = $a / $b;        

// Виводимо результати
echo "Сума: $sum.<br>";
echo "Різниця: $diff.<br>";
echo "Добуток: $mult.<br>";
echo "Ділення: $div.<br>";


// Масив днів тижня
$days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

// 3-й день → індекс 2
// 5-й день → індекс 4
echo "3-й день: " . $days[2] . "<br>";
echo "5-й день: " . $days[4] . "<br>";


// Асоціативний масив (товар = ціна)
$products = [
    "Phone" => 10000,
    "Laptop" => 25000,
    "Headphones" => 2000
];

// Перебір масиву через foreach
foreach ($products as $name => $price) {
    echo "Товар: $name, Ціна: $price грн<br>";
}


// День тижня
$day = "Monday";

// switch перевіряє значення змінної
switch ($day) {
    case "Monday":
        echo "Сьогодні понеділок<br>";
        break;
    case "Tuesday":
        echo "Сьогодні вівторок<br>";
        break;
    case "Wednesday":
        echo "Сьогодні середа<br>";
        break;
    case "Thursday":
        echo "Сьогодні четвер<br>";
        break;
    case "Friday":
        echo "Сьогодні п'ятниця<br>";
        break;
    case "Saturday":
    case "Sunday":
        echo "Сьогодні вихідний<br>";
        break;
    default:
        echo "Невідомий день<br>";
}


// Число для перевірки
$x = 15;

// Перевірка на парність:
// якщо остача від ділення на 2 = 0 парне
if ($x % 2 == 0) {
    echo "$x - парне число";
} else {
    echo "$x - непарне число";
}
?>