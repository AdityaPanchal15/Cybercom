<?php
    require 'controller.php';
    $obj=new Controller();

    if($obj->loggedin()){
        $firstname=$obj->getField('firstname');
        $surname=$obj->getField('surname');
        echo "already logged in $firstname $surname <a href='logout.php'>Logout</a>";
    }else{
        header('Location:login.php');
    }

    
    
?>