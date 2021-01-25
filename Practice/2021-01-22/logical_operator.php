<?php
    $number=10500;
    $upper=1000;
    $lower=500;

    if($number>=$lower && $number<=$upper){
        echo "ok" ;
    }else{
        echo "number must be between  $lower and $upper ";
    }

    if($number>=$lower || $number<=$upper){
        echo "<br>ok" ;
    }else{
        echo "<br>number must be between  $lower or $upper ";
    }
?>