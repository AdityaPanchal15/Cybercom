<?php
    require 'connect.php';

    $user_ip=$_SERVER['REMOTE_ADDR'];

    function ip_exists(mysqli $link,$ip){
        global $user_ip;
        $query="SELECT `ip` FROM `hits_ip` WHERE `ip`='$user_ip'";
        @$query_run=mysqli_query($link,$query);
        $query_num_rows=mysqli_num_rows($query_run);
        if($query_num_rows==0){
            return false;
        }else if($query_num_rows>=1){
            return true;
        }
    }
   
    function ip_add(mysqli $link,$ip){
        $query="INSERT INTO `hits_ip` VALUES ('$ip')";
        @$query_run=mysqli_query($link,$query);
    }

    function update_count( mysqli $conn){
        $query="select * from `hits_count`";
        if(@$query_run=mysqli_query($conn,$query)){
            $count=mysqli_fetch_row($query_run);
            $count_inc=$count[0]+1;
            
            $query_update="UPDATE `hits_count` SET `count`='$count_inc'";
            
            @$query_update_run=mysqli_query($conn,$query_update);

            // $count=mysqli_result( $query_run,0,'count');
            // echo $count;
            
        }
    }

    if(!ip_exists($link,$user_ip)){
        update_count($link);
        ip_add($link,$user_ip);
    }

    // update_count($link);
    // ip_add($link,$user_ip);
    // ip_exists($link,$user_ip);

?>

<h1>Hit Counter</h1>