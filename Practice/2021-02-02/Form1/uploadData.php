<?php
    require 'connection.inc.php';

    if(isset($_POST['name']) && isset($_POST['password']) && isset($_POST['address']) && isset($_POST['gender']) && isset($_POST['age']) && isset($_POST['game']) && isset($_FILES['file']['name'])){
        $name=$_POST['name'];
        $password=$_POST['password'];
        $password_hash=md5($password);

        $address=$_POST['address'];
        $gender=$_POST['gender'];
        $age=$_POST['age'];
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
        
        //file process
        $filename  = ($_FILES['file']['name']);  
        $temp_name  = $_FILES['file']['tmp_name'];  
       
        if(isset($filename) and !empty($filename)){
            $location = 'uploads/';      
            if(move_uploaded_file($temp_name, $location.$filename)){
                echo 'File uploaded successfully';
            }
        }
        

        $query="insert into `form1` values('','".mysqli_real_escape_string($link,$name)."','".mysqli_real_escape_string($link,$password_hash)."','".mysqli_real_escape_string($link,$address)."','".mysqli_real_escape_string($link,$gender)."','".mysqli_real_escape_string($link,$age)."','".mysqli_real_escape_string($link,$game)."','".mysqli_real_escape_string($link,$filename)."')";
        if($query_run=mysqli_query($link,$query)){
            header('Location:index.php');
        }else{
            
            echo 'There is some issue in submit form.Please try again...';
        }
    }
?>