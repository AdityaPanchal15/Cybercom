<?php
    require 'connect.inc.php';
?>

<form action="index.php" method="get">
    <select name="uh">
        <option value="u">Unhealthy</option>
        <option value="h">Healthy</option>
    </select>
    <button type="submit">Submit</button>
</form>

<?php

    if(isset($_GET['uh']) && !empty($_GET['uh'])){

        $uh=strtolower($_GET['uh']);   

        if($uh=='u' || $uh=='h'){
                $query="select `food`,`calories` from `food` WHERE `healthy_unhealthy`='$uh' ORDER BY `id` DESC";
                // $query_run=mysqli_query($query);

                if($query_run=mysqli_query($link,$query)){
                    
                    if(mysqli_num_rows($query_run)==NULL){
                        echo 'No records found.'; 
                    }else{
                        while($query_row = mysqli_fetch_assoc($query_run)){
                            $food=$query_row['food'];
                            $calories=$query_row['calories'];
                            
                            echo $food.' has '.$calories.' calories.<br>';
                        }
                    }

                }else{
                    echo mysqli_error($link);
                }
            }else{
                echo 'Must be u or h';
            }
    }
?>