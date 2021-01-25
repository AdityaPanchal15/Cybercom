<?php
    $num=3;

    switch($num){
        case 1:
            echo 'One';
            break;
        case 2:
            echo 'Two';
            break;
        default:
            echo 'Enter valid number';
            break;
    }

    $day='Monday';

    switch($day){
        case '<br/>saturday':
        case '<br/>sunday':
            echo 'Weekend';
            break;
        default:
            echo '<br/>Regular day';
            break;
    }
?>