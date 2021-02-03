<?php
    require 'core.inc.php';
    require 'connect.inc.php';

    if(!loggedin()){

        if(isset($_POST['username'])&& isset($_POST['password']) && isset($_POST['password_again']) && isset($_POST['firstname']) && isset($_POST['surname'])){
            $username=$_POST['username'];
            
            $password=$_POST['password'];
            $password_again=$_POST['password_again'];
            $password_hash=md5($password);

            $firstname=$_POST['firstname'];
            $surname=$_POST['surname'];

            if(!empty($username)&& !empty($password) && !empty($password_again) && !empty($firstname) && !empty($surname) ){
                if(strlen($username)>30||strlen($firstname)>40||strlen($surname)>40){
                    echo 'please hear to maxlength of field.';
                }else{
                    if($password!=$password_again){
                        echo 'Password do not match';
                    }else{
                        $query="select `username` from `login` where `username`='$username'";
                        $query_run=mysqli_query($link,$query);

                        if(mysqli_num_rows($query_run)==1){
                            echo 'The username '.$username.' already exists.';
                        }else{
                            $query="insert into `login` values ('','".mysqli_real_escape_string($link,$username)."','".mysqli_real_escape_string($link,$password_hash)."','".mysqli_real_escape_string($link,$firstname)."','".mysqli_real_escape_string($link,$surname)."')";
                            if($query_run=mysqli_query($link,$query)){
                                header('Location:register_success.php');
                            }else{
                                echo 'Sorry, we could not register you at this time.Try again later.';
                            }
                        }
                    }
                }
            }else{
                echo 'All filds are required.';
            }
        }
    ?>
        <form action="register.php" method="post">
            Username: <br> <input type="text" name="username" maxlength="30" value=<?php if(isset($username)) { echo $username; } ?>><br>
            Password: <br><input type="password" name="password" ><br>
            Password again: <br> <input type="password" name="password_again"><br>
            Firstnmae: <br><input type="text" name="firstname" maxlength="40" value=<?php  if(isset($firstname)) { echo $firstname;} ?> ><br>
            Surname: <br> <input type="text" name="surname" maxlength="40" value=<?php if(isset($surname)) { echo $surname;} ?>><br>
            <input type="submit" value="Register">

        </form>
    <?php
    }else if(loggedin()){
        echo 'You are already registered and logged in.';
    }
?>