<?php

    // $string='image.jpeg';
    // $stringreversed=strrev($string);

    $string_one='This is my essay.I\'m going to be talking about php.';
    $string_two='This is my essay.I\'m going to be talking about subject php.';

    similar_text($string_one,$string_two,$result);
    echo 'The similarity between is '.$result;


    $string_one='Lorem Ipsum is simply dummy text of the printing and typesetting industry.';
    $string_two='Lorem Ipsum has been the industry\'s standard dummy text ever ';

    similar_text($string_one,$string_two,$result);
    echo nl2br("\n The similarity between is $result");
?>