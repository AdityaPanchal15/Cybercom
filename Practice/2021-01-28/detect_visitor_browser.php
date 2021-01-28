<?php
    $browser=get_browser(null,true);
    $browser=$browser['browser'];
    // echo "<pre>";
    // print_r($browser);
    if($browser!='chrome'){
        echo 'You are not using chrome';
    }
?>