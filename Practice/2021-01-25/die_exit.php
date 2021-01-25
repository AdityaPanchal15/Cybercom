<?php
// example1
    // echo 'Hello';
    // die('error page not found');
    // echo 'World';

// example2
    @mysqli_connect('localhost','adi','') || die('Could not connect to database.');
    echo 'Connect!';

//exit can use same way in place of die()

?>