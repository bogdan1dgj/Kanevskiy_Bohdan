<?php
$emailError = "";
$messageError = "";
$success = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    $valid = true;

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $emailError = "Невірний email";
        $valid = false;
    }

    if (strlen($message) < 20) {
        $messageError = "Мінімум 20 символів";
        $valid = false;
    }

    if ($valid) {
        $success = "Повідомлення успішно надіслано!";
    }
}
?>

<!DOCTYPE html>
<html lang="uk">
<head>
    <meta charset="UTF-8">
    <title>Форма</title>
</head>
<body>

<form method="POST">
    <input type="text" name="name" placeholder="Ім’я"><br><br>

    <input type="text" name="email" placeholder="Email"><br>
    <span style="color:red;"><?php echo $emailError; ?></span><br>

    <textarea name="message" placeholder="Повідомлення"></textarea><br>
    <span style="color:red;"><?php echo $messageError; ?></span><br>

    <button type="submit">Надіслати</button>
</form>

<p><?php echo $success; ?></p>

</body>
</html>