<?php
    ob_start();
?>

<h1>my page</h1>
<?php
    $redirect_page='http://google.com';
    $redirect=false;
    if($redirect==true){
        header('Location: '.$redirect_page);
    }

    ob_end_flush();
?>
