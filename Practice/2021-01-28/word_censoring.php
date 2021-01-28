<?php
    $find=array('alex','billy','dale');
    $replace=array('a**x','b***y','d**e');

    if(isset($_POST['user_input'])&&!empty($_POST['user_input'])){
       $user_input=$_POST['user_input'];
       $user_input_lower=strtolower($user_input);
       $user_input_new=str_ireplace($find,$replace,$user_input);
       
       echo $user_input_new;
    }
?>

<form action="word_censoring.php" method="post">
    <textarea name="user_input" cols="30" rows="7"><?php echo $user_input; ?></textarea><br>
    <input type="submit" value="submit">
</form>