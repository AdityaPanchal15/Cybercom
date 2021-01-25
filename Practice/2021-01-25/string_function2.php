<?php
    $string='This is an example string.';
    $string_shuffled=str_shuffle($string);
    echo nl2br("\n".'str_shuffle($string)='.$string_shuffled);

    $string1='abcdefghijklmnopqrstuvwxyz0123456789';
    $string_shuffled1=str_shuffle($string);
    $half=substr($string_shuffled1,0,strlen($string1)/2);
    $str_reverse=strrev($string1);

    echo nl2br("\n strrev=$str_reverse");
    echo nl2br("\n substr=$half");
    echo nl2br("\n".'str_shuffle($string)='.$string_shuffled1);
?>