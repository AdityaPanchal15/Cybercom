<?php
    require 'connection.inc.php';

    if(isset($_POST['firstName']) && isset($_POST['password']) && isset($_POST['status']) && isset($_POST['address']) && isset($_POST['gender']) && isset($_POST['game'])){
        $name=$_POST['firstName'];
        $password=$_POST['password'];
        $password_hash=md5($password);
        $marital_status=$_POST['status'];
        $address=$_POST['address'];
        $gender=$_POST['gender'];
        $dob=$_POST['day'].'/'.$_POST['month'].'/'.$_POST['year'];
        $gameArr=$_POST['game'];
        // $file=$_POST['file'];
        $game="";

        foreach($gameArr as $selected){
            if($game==""){
                $game=$selected;
            }else{
                $game =$game.','.$selected;
            }
            
        }
        

        $query="insert into `form2` values('','".mysqli_real_escape_string($link,$firstName)."','".mysqli_real_escape_string($link,$password_hash)."','".mysqli_real_escape_string($link,$address)."','".mysqli_real_escape_string($link,$gender)."','".mysqli_real_escape_string($link,$dob)."','".mysqli_real_escape_string($link,$game)."','".mysqli_real_escape_string($link,$marital_status)."')";
        if($query_run=mysqli_query($link,$query)){
            header('Location:index.php');
        }else{
            
            echo 'There is some issue in submit form.Please try again...';
        }
    }
?>