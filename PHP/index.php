<?php
    require 'controller/controller.php';
    $controlObj=new Controller();

    if(isset($_POST['submit'])){
        $controlObj->login($_POST);
    }

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Page</title>
</head>
<body>
    <h1>Login Page</h1>
    <form action="index.php" method="post">
        <table>
            
            <tr>
                <td>Email</td>
            </tr>
            <tr>
                <td><input type="text" name="username" id="username"><span id="usernameErr"></span></td>
            </tr>
            <tr>
                <td>Password</td>
            </tr>
            <tr>
                <td><input type="password" name="password" id="password"><span id="passwordErr"></span></td>
            </tr>
            <tr>
                <td>
                    <input type="submit" name="submit" value="Login">
                    <input type="button" value="Register" onclick="location.href = 'register.php';">
                </td>
                
            </tr>
        </table>      
    </form>
</body>
</html>