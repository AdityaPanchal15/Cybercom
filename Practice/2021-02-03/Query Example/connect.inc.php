<?php
    $conn_err='Could not connect.';
    $mysql_host='localhost';
    $mysql_user='root';
    $mysql_pass='';
    $mysql_db='mydb';
    $link=@mysqli_connect($mysql_host,$mysql_user,$mysql_pass,$mysql_db);
    if(!$link){
        die($conn_err);
    }
?>