<?php
  $match='pass123';
  if(isset($_POST['password'])){
        $password=$_POST['password'];
        if(!empty($password)){
            if($password==$match){
                echo 'That is correct';
            }else{
                echo 'That is incorrect';
            }
        }else{
            echo 'Please type password';
        }
    }
?>

<form action="post_variable.php" method="post">
Password: <br><input type="password" name="password" >
<input type="submit" value="submit">  
</form>