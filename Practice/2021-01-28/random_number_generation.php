<?php
    // $rand=rand();       //514744042
    // $max=getrandmax();  //2147483647
    // echo $rand.'/'.$max;        
    if(isset($_POST['roll'])){
        $rand=rand(1,6);
        echo 'you roll a '.$rand;
    }
?>

<form action="random_number_generation.php" method="post">
    <input type="submit" name='roll' value="submit">
</form>