<?php
function clean($data) {
    return htmlspecialchars(trim($data));
}

$name = $age = $gender = $about = "";
$hobbies = [];
$errors = [];

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name = clean($_POST["name"] ?? "");
    $age = clean($_POST["age"] ?? "");
    $gender = $_POST["gender"] ?? "";
    $about = clean($_POST["about"] ?? "");
    $hobbies = $_POST["hobbies"] ?? [];

    if (!is_numeric($age) || $age < 10 || $age > 100) {
        $errors["age"] = "Вік має бути від 10 до 100";
    }

    if (empty($errors)) {
        echo "<h2>Дані:</h2>";
        echo "Ім’я: $name <br>";
        echo "Вік: $age <br>";
        echo "Стать: " . htmlspecialchars($gender) . "<br>";
        echo "Хобі: " . htmlspecialchars(implode(", ", $hobbies)) . "<br>";
        echo "Опис: $about <br>";
        exit;
    }
}
?>

<!DOCTYPE html>
<html lang="uk">
<head>
    <meta charset="UTF-8">
    <title>Анкета</title>
</head>
<body>

<h2>Анкета користувача</h2>

<form method="POST">

Ім’я:<br>
<input type="text" name="name" value="<?= $name ?>"><br><br>

Вік:<br>
<input type="text" name="age" value="<?= $age ?>"><br>
<span style="color:red;"><?= $errors["age"] ?? "" ?></span><br><br>

Стать:<br>
<input type="radio" name="gender" value="Чоловік" <?= $gender=="Чоловік"?"checked":"" ?>> Чоловік
<input type="radio" name="gender" value="Жінка" <?= $gender=="Жінка"?"checked":"" ?>> Жінка
<br><br>

Хобі:<br>
<input type="checkbox" name="hobbies[]" value="Спорт" <?= in_array("Спорт",$hobbies)?"checked":"" ?>> Спорт
<input type="checkbox" name="hobbies[]" value="Музика" <?= in_array("Музика",$hobbies)?"checked":"" ?>> Музика
<input type="checkbox" name="hobbies[]" value="Подорожі" <?= in_array("Подорожі",$hobbies)?"checked":"" ?>> Подорожі
<br><br>

Короткий опис:<br>
<textarea name="about"><?= $about ?></textarea><br><br>

<button type="submit">Надіслати</button>

</form>

</body>
</html>