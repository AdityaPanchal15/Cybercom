<?php
    $string='This is a string';

    if(preg_match('/asa/',$string)){
        echo 'Match found';
    }else{
        echo 'Not found';
    }

    if(preg_match('/is/',$string)){
        echo nl2br("\n Match found");
    }else{
        echo nl2br("\n Not found");
    }
    
?>
