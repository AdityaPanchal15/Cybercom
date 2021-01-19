<?php
$firstName= $_POST['firstName'];
$lastName = $_POST['lastName'];
$month= $_POST['month'];
$day= $_POST['day'];
$year= $_POST['year'];
$gender= $_POST['gender'];
$email= $_POST['email'];
$password= $_POST['password'];
$question= $_POST['question'];
$answer= $_POST['answer'];
$address= $_POST['address'];
$city= $_POST['city'];
$state= $_POST['state'];
$zipcode= $_POST['zipcode'];
$deviceType= $_POST['deviceType'];
$phone= $_POST['phone'];
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <table>
        <tr>
            <td>First Name</td>
            <td><?php print_r($firstName) ?> </td>
        </tr>
        <tr>
            <td>Last Name</td>
            <td><?php print_r($lastName) ?> </td>
        </tr>
        <tr>
            <td>Date Of Birth</td>
            <td><?php print_r($day."/".$month."/".$year) ?> </td>
        </tr>
        <tr>
            <td>Gender</td>
            <td><?php print_r($gender) ?> </td>
        </tr>
        <tr>
            <td>Email</td>
            <td><?php print_r($email) ?> </td>
        </tr>
        <tr>
            <td>Password</td>
            <td><?php print_r($password) ?> </td>
        </tr>
        <tr>
            <td>Question</td>
            <td><?php print_r($question) ?> </td>
        </tr>
        <tr>
            <td>Answer</td>
            <td><?php print_r($answer) ?> </td>
        </tr>
        <tr>
            <td>Address</td>
            <td><?php print_r($address) ?> </td>
        </tr>
        <tr>
            <td>City</td>
            <td><?php print_r($city) ?> </td>
        </tr>
        <tr>
            <td>State</td>
            <td><?php print_r($state) ?> </td>
        </tr>
        <tr>
            <td>Zip Code</td>
            <td><?php print_r($zipcode) ?> </td>
        </tr>
        <tr>
            <td>Phone</td>
            <td><?php print_r($phone) ?> </td>
        </tr>
        <tr>
            <td>Device Type</td>
            <td><?php print_r($deviceType) ?> </td>
        </tr>
    </table>
</body>
</html>