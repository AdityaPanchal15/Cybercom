<?php
    $time=time();
    $actual_time=date('d M Y @ H:i:s',$time);   //Thu Jan 2021 @ 16:53:47
    $time_modified=date('d M Y @ H:i:s',strtotime('+ 1 week'));
    // $time_modified=date('d M Y @ H:i:s',$time-(7*24*30*30));
    // $time_modified=date('d M Y @ H:i:s',strtotime('30 seconds'));
    // $time_modified=date('d M Y @ H:i:s',strtotime('+ 1 year'));
    // $time_modified=date('d M Y @ H:i:s',strtotime('+ 1 week 2 hour 30 seconds'));
    echo 'The time now is '.$actual_time.'<br>The time modified is '.$time_modified;
    
?>