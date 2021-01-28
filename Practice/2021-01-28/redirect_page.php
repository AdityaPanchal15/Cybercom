<!-- <h1>my page</h1>//error generate  -->
<?php
    $redirect_page='http://google.com';
    $redirect=true;
    if($redirect==true){
        header('Location: '.$redirect_page);
    }
?>