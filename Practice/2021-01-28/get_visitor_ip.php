<?php
    require 'conf.inc.php';
    foreach($ip_blocked as $ip){
        
        if($ip==$ip_address){
           
            die('your ip address,'.$ip_address.'has been blocked.');
        }
    }
?>

<h1>Welcome!</h1>