<?php
    require 'core.inc.php';
    require 'connect.inc.php';
        
    if(loggedin()){
        $firstname=getField($link,'firstname');
        $surname=getField($link,'surname');
        echo 'You are logged in,'.$firstname.' '.$surname.'. <a href="logout.php">Logout</a><br>';
        
    }else{
        include 'loginForm.inc.php';
    }

    

?>