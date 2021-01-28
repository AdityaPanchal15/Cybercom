<?php
    $host=$_SERVER['HTTP_HOST'];
    $image=$host.'/images/';

    $ip_address=$_SERVER['REMOTE_ADDR'];  //for get_visitor_ip.php
    $ip_blocked=array('::1','127.0.0.1','100.100.100.100');

?>