<?php
   $userip=$_SERVER['REMOTE_ADDR'];
   
   function echo_ip(){
       global $userip;
       $string='Your ip address is'.$userip;
       echo $string;
   }
   echo_ip();

?>