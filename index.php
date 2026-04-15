<?php
// Створюємо змінні
$name = "Богдан";      
$age = 17;               
$is_student = true;      

echo "Мене звати $name, мені $age років. ";

// Тернарний оператор: якщо true → один текст, якщо false → інший
echo $is_student ? "Я студент.<br>" : "Я не студент.<br>";


// Створюємо масив чисел від 1 до 5
$numbers = [1, 2, 3, 4, 5];

// Функція array_sum() рахує суму всіх елементів масиву
$sum = array_sum($numbers);

// Виводимо результат
echo "Сума: $sum<br>";


// Асоціативний масив 
$user = [
    "name" => "Богдан",
    "email" => "pavlovuch@gmail.com",
    "phone" => "+3884584392"
];

// Виводимо у вигляді HTML списку
echo "<ul>";

// foreach перебирає масив:
// $key — це ключ (name, email...)
// $value — це значення
foreach ($user as $key => $value) {
    echo "<li>$key: $value</li>";
}

echo "</ul>";


// Перевірка віку через if
if ($age > 18) {
    echo "Вік більше 18<br>";
} else {
    echo "Вік менше або дорівнює 18<br>";
}


// Оцінка (від 0 до 100)
$grade = 85;

if ($grade >= 90) {
    echo "Відмінно";
} elseif ($grade >= 70) {
    echo "Добре";
} elseif ($grade >= 50) {
    echo "Задовільно";
} else {
    echo "Незадовільно";
}
?>