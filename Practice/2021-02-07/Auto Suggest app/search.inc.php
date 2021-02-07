<?php

if(isset($_GET['search_text'])){
    $search_text=$_GET['search_text'];
}
if(!empty($search_text)){
    if($link=mysqli_connect('localhost','root','','mydb')){
        $query="SELECT `name` FROM `names` WHERE `name` LIKE '".mysqli_real_escape_string($link,$search_text)."%'";
        $query_run=mysqli_query($link,$query);
    
        while($query_row=mysqli_fetch_assoc($query_run)){ 
            echo $name=$query_row['name']."<br/>";
        }
    }
}

    
?>