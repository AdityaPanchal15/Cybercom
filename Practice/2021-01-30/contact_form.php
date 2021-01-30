<?php
    if(isset($_POST['contact_name']) && isset($_POST['contact_email']) && isset($_POST['contact_text'])){
        $contact_name=$_POST['contact_name'];
        $contact_email=$_POST['contact_email'];
        $contact_text=$_POST['contact_text'];

        if(!empty($contact_name) && !empty ($contact_email) && !empty($contact_text)){
            if(strlen($contact_name)>25 || strlen($contact_email)>50 || strlen($contact_text)>1000){
                echo 'Sorry,maxLength of all feild exceeded';
            }else{
                $to='adpanchal15@gmail.com';
                $subject=$contact_name;
                $body=$contact_text;
                $header='FROM: '.$contact_email;

                if(@mail($to,$subject,$body,$header)){
                    echo 'Thank you for contact us.We will be in touch soon';
                }else{
                    echo 'Error in sending email';
                }
            }
        }else{
            echo 'All fields are required';
        }
    }
?>

<form action="index.php" method="post">
    Name: <br><input type="text" name="contact_name" maxlength="25"><br><br>
    Email address: <br><input type="text" name="contact_email" maxlength="50"><br><br>
    Message: <br>
    <textarea name="contact_text" cols="30" rows="10" maxlength="1000"></textarea>
    <br><br>
    <input type="submit" value="submit">
</form>