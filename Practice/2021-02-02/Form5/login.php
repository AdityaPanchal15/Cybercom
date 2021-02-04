<?php
require 'connection.inc.php';
ob_start();
session_start();
    if(isset($_POST['email'])&& isset($_POST['password'])){
        $username=$_POST['email'];
        $password=$_POST['password'];

        $password_hash=md5($password);
        // echo $password_hash;

        if(!empty($username) && !empty($password)){
            $query="select `id` from `form3` where `email`='".mysqli_real_escape_string($link,$username)."' and `password`='".mysqli_real_escape_string($link,$password_hash)."' ";
            if($query_run=mysqli_query($link,$query)){
                $query_num_row=mysqli_num_rows($query_run);
                if($query_num_row==0){
                    echo 'Invalid username/password combination.';
                    header('Location:index.php');
                }else if($query_num_row==1){
                    $row = mysqli_fetch_assoc($query_run);
                    $user_id = $row['id'];
                    $_SESSION['user_id']=$user_id;
                    header('Location:desk.php');
                }
            }else{
                echo 'nothing.';
            }
            
        }else{
            echo 'You must supply a username and password';
        }
    }
?>