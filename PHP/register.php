<?php
    include 'controller/controller.php';

    $controlObj=new Controller();
    date_default_timezone_set("Asia/Calcutta"); 
    $createdAt= Date("d-m-Y h:i:sa");

    if(isset($_POST['submit'])){
        if($controlObj->isExistUser($_POST)){
            echo "Email id already exist.";
        }else{
            $controlObj->registerUser($_POST);
            // echo 'ok';
        }
    }

?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registration</title>
</head>
<body>
    <form action="register.php" method="post">
    <table>
        <tr>
            <td>Prefix</td>
            <td>
                <select name="prefix" id="prefix">
                    <option value=""></option>
                    <option value="Mr.">Mr.</option>
                    <option value="Mrs.">Mrs.</option>
                    <option value="Miss.">Miss.</option>
                </select>
                <span id="prefixErr"></span>
            </td>
        </tr>
        <tr>
            <td>First Name</td>
            <td><input type="text" name="firstName" id="firstName"><span id="firstNameErr"></span></td>
        </tr>
        <tr>
            <td>Last Name</td>
            <td><input type="text" name="lastName" id="lastName"><span id="lastNameErr"></span></td>
        </tr>
        <tr>
            <td>Email</td>
            <td><input type="email" name="email" id="email"><span id="emailErr"></span></td>
        </tr>
        <tr>
            <td>Mobile Number</td>
            <td><input type="number" name="number" id="number"><span id="numberErr"></span></td>
        </tr>
        <tr>
            <td>Password</td>
            <td><input type="password" name="password" id="password"><span id="passwordErr"></span></td>
        </tr>
        <tr>
            <td>Confirm Password</td>
            <td><input type="password" name="rpassword" id="rpassword"><span id="rpasswordErr"></span></td>
        </tr>
        <tr>
            <td>Information</td>
            <td><textarea name="information" id="information" cols="30" rows="6"></textarea><span id="informationErr"></span></td>
        </tr>
        <tr>
            <td></td>
            <td><input type="checkbox" name="agree" id="agree" required><span>Hereby,I Accept Term & Condition</span><br><span id="agreeErr"></span></td>
        </tr>
        <!-- <input type="hidden" name="createdAt" id="createdAt" value="<?//php echo $createdAt ?>"> -->
        <!-- <input type="hidden" name="updatedAt" id="updatedAt" value=""> -->
        <tr>
            <td><button type="submit" name="submit" onclick="return validate()">Submit</td>
        </tr>
    </table>
        
    </form>
    <script src="js/validateScript.js"></script>
</body>
</html>