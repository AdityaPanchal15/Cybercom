<?php
    require 'connection.inc.php';

    if(isset($_POST['firstName']) && isset($_POST['lastName']) &&isset($_POST['day'])&&isset($_POST['month'])&&isset($_POST['year']) && isset($_POST['gender']) && isset($_POST['country']) && isset($_POST['email']) && isset($_POST['phone']) && isset($_POST['password']) && isset($_POST['rpassword']) ){
        $firstName=$_POST['firstName'];
        $lastName=$_POST['lastName'];
        $dob=$_POST['day'].'/'.$_POST['month'].'/'.$_POST['year'];
        $gender=$_POST['gender'];
        $country=$_POST['country'];
        $email=$_POST['email'];
        $phone=$_POST['phone'];

        $password=$_POST['password'];
        $password_hash=md5($password);
        $rpassword=$_POST['rpassword'];

        $query="insert into `form3` values('','".mysqli_real_escape_string($link,$firstName)."','".mysqli_real_escape_string($link,$lastName)."','".mysqli_real_escape_string($link,$dob)."','".mysqli_real_escape_string($link,$gender)."','".mysqli_real_escape_string($link,$country)."','".mysqli_real_escape_string($link,$email)."','".mysqli_real_escape_string($link,$phone)."','".mysqli_real_escape_string($link,$password_hash)."')";
        if($query_run=mysqli_query($link,$query)){
            echo 'hee';
            header('Location:index.php');
        }else{
            echo 'There is some issue in submit form.Please try again...';
        }
        
    }else{
        echo 'Not ok';
    }
?>