<?php
    $string='&nbsp;This is an example string.&nbsp;';
    $string_trimmed=trim($string);
    $string_ltrimmed=ltrim($string);
    $string_rtrimmed=rtrim($string);
    echo $string_trimmed;

    $string1='this is a <img src="image.jpg"> string.';
    $string_slashes=htmlentities(addslashes($string1));
    echo nl2br("\n addslashes(string)=$string_slashes");
    echo nl2br("\n stripslashes=".stripcslashes($string_slashes));
?>