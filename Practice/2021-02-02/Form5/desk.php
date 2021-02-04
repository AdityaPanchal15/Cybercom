<?php
    require 'connection.inc.php';
    require 'login.php';

    if(loggedin()){
        $firstname=getField($link,'firstName');
        $lastname=getField($link,'lastName');
        echo 'You are logged in,'.$firstname.' '.$lastname.'. <a href="logout.php">Logout</a><br>';
    }else{
        include 'index.php';
    }

    function loggedin(){
        if(isset($_SESSION['user_id'])&& !empty($_SESSION['user_id'])){
           return true; 
        }else{
            return false;
        }
    }
    
    function getField(mysqli $link,$field){
        $query="select `$field` from `form3` where `id`='".$_SESSION['user_id']."' ";
        if($query_run=mysqli_query($link,$query)){
            if($row=mysqli_fetch_assoc($query_run)){
                return $row[$field];
            }
            
        }
    }
?>