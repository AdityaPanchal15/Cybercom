<?php
    function Myname(){
       echo 'Aditya'; 
    }

    echo 'My name is ';
    MyName();


//Function with arguments example1
    $x=5;
    $y=10;

    large($x,$y);

    function large($a,$b){
        if($a>$b){
            echo nl2br("\n".$a.' is large than '.$b);
        }else{
            echo nl2br("\n".$b.' is large than '.$a);
        }
    }


//Example2
    function add($number1,$number2){
        echo nl2br("\n".$number1."+".$number2."=".$number1+$number2);
    }
    add(5,10);


//Example3 
    function displayDate($day,$date,$year){
        echo nl2br("\n".$day.' '.$date.' '.$year);
    }
    displayDate('Tuesday',12,2021);
?>