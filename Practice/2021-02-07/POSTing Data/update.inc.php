<?php

    $link=mysqli_connect('localhost','root','','mydb');
    if(isset($_POST['text'])){
        $text=$_POST['text'];
        if(!empty($text)){
            $query="INSERT INTO `postdata` VALUES('','".mysqli_real_escape_string($link,$text)."')";
            if($query_run=mysqli_query($link,$query)){
                echo 'Data inserted'; 
            }
        }else{
            echo 'please type something';
        }
    }

?>