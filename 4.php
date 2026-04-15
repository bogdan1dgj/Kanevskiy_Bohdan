<?php
// Дві змінні
$a = 8;
$b = 15;

// Знаходимо максимум і мінімум
if ($a > $b) {
    $max = $a;
    $min = $b;
} else {
    $max = $b;
    $min = $a;
}

echo "Максимум: $max<br>";
echo "Мінімум: $min<br>";


// Масив чисел
$numbers = [10, 20, 30, 40, 50];

// Сума елементів
$sum = array_sum($numbers);

// Кількість елементів
$count = count($numbers);

// Середнє арифметичне = сума / кількість
$average = $sum / $count;

echo "Середнє: $average<br>";


// Асоціативний масив студентів
$students = [
    "Іван Петренко" => 75,
    "Марія Іваненко" => 85,
    "Олег Шевченко" => 90
];

// Виводимо тільки тих, у кого бал > 80
foreach ($students as $name => $grade) {
    if ($grade > 80) {
        echo "$name: $grade<br>";
    }
}


// Число
$num = 12;

// Перевірка кратності
if ($num % 3 == 0 && $num % 5 == 0) {
    echo "Кратне і 3, і 5<br>";
} elseif ($num % 3 == 0) {
    echo "Кратне 3<br>";
} elseif ($num % 5 == 0) {
    echo "Кратне 5<br>";
} else {
    echo "Не кратне ні 3, ні 5<br>";
}


// Таблиця множення для 7
for ($i = 1; $i <= 10; $i++) {
    // $i змінюється від 1 до 10
    $result = 7 * $i;
    echo "7 x $i = $result<br>";
}
?>