<?php
ob_start();
session_start();
$current_file=$_SERVER['SCRIPT_NAME'];


if(isset($_SERVER['HTTP_REFERER']) && !empty($_SERVER['HTTP_REFERER'])){
    $http_referer=$_SERVER['HTTP_REFERER'];
}

function loggedin(){
    if(isset($_SESSION['user_id'])&& !empty($_SESSION['user_id'])){
       return true; 
    }else{
        return false;
    }
}

function getField(mysqli $link,$field){
    $query="select `$field` from `login` where `id`='".$_SESSION['user_id']."' ";
    if($query_run=mysqli_query($link,$query)){
        if($row=mysqli_fetch_assoc($query_run)){
            return $row[$field];
        }
        
    }
}
?>