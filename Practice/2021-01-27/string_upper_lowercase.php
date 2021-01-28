<?php
    if(isset($_GET['user_name'])&&!empty($_GET['user_name'])){
        $user_name=$_GET['user_name'];
        $user_name_lower=strtolower($user_name);

        if($user_name_lower=='alex'){
            echo 'You are the best '.$user_name;
        }

    }
?>

<form action="string_upper_lowercase.php" method="get">
    name: <input type="text" name="user_name"><br>
    <input type="submit" value="submit">
</form>