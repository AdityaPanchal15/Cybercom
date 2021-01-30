<?php
    if(isset($_POST['user_password'])&& !empty($_POST['user_password'])){
        $user_password=$_POST['user_password'];
        $file_name='hash.txt';
        $handle=fopen($file_name,'r');
        $file_password=fread($handle,filesize($file_name));

        if(md5($user_password)==$file_password){
            echo 'Login successfully';
        }else{
            echo 'Incorrect password';
        }
    }else{
        echo 'Enter password';
    }
?>

<form action="md5_encryption.php" method="post">
    Password: <input type="text" name="user_password"><br><br>
    <input type="submit" value="submit">
</form>