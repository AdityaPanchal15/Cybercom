<?php
    $name='Bob';
    $age=21;
    if(strtolower($name)==='bob'){
        if($age>=21){
            echo 'you are over 21';
        }else{
            echo 'Not over 21';
        }
    }else{
        echo 'you are not Bob!';
    }
?>