<?php
    $to='adpanchal15@gmail.com';
    $subject='Email Practice';
    $body='This is an text email'."\n\n".'Hope you well.';
    $header='From:phpacademy <adpanchal15@gmail.com>';

    if(mail($to,$subject,$body,$header)){
        echo 'Email has been sent to '.$to;
    }else{
        echo 'Error in sending email';
    }
?>