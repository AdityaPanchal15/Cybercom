<?php
    require 'controller.php';
    // require 'index.php';
    $obj=new Controller();

    if(isset($_POST['submit'])){
        echo $obj->login();
    }
    if($obj->loggedin()){
        header('Location:index.php');
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
</head>
<body>
    <form action="login.php" method="post">
        <input type="text" name="user" id="user" placeholder="username">
        <input type="password" name="pass" id="pass" placeholder="password">
        <input type="submit" name="submit" value="Login">
    </form>
</body>
</html>