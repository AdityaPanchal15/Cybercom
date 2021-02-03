<?php
    require 'connect.inc.php';

    if(isset($_POST['search_name'])){
        $search_name=$_POST['search_name'];
        if(!empty($search_name)){

            if(strlen($search_name)>=4){
                $query="select `name` from `names` where `name` like '%".mysqli_real_escape_string($link,$search_name)."%'";
                $query_run=mysqli_query($link,$query);
                
                $query_num_rows=mysqli_num_rows($query_run);
                if($query_num_rows>=1){
                    while($query_row=mysqli_fetch_assoc($query_run)){
                        echo $query_row['name']."<br>";
                    }
                }else{
                    echo 'No record found.';
                }
            }else{
                echo 'Your keyword must be 5 character or more.';
            }
        }
    }
?>

<form action="index.php" method="post">
    Name: <input type="text" name="search_name" >
    <input type="submit" value="search">
</form>