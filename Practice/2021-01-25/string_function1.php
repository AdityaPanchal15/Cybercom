<?php
    $string='This is an example string .';
    $string_word_count=str_word_count($string);
    echo ("str_word_count:".$string_word_count);
    
    $string_word_count_array=str_word_count($string,1);
    echo nl2br("\n str_word_count($string,1)=    ");
    print_r($string_word_count_array);

    $string_word_count_position=str_word_count($string,2);
    echo nl2br("\n str_word_count($string,2)=    ");
    print_r($string_word_count_position);

    $string_word_count_3rd_arg=str_word_count($string,1,'.');
    echo nl2br("\n str_word_count($string,1,'.')=    ");
    print_r($string_word_count_3rd_arg);
?>