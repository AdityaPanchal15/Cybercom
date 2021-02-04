<?php
if(isset($_POST['name']) && isset($_POST['email']) && isset($_POST['subject']) && isset($_POST['message'])){
        $name=$_POST['name'];
        $email=$_POST['email'];
        $contact_subject=$_POST['subject'];
        $message=$_POST['message'];
       
        if(strlen($name)>25 || strlen($email)>50 || strlen($message)>1000 || strlen($contact_subject)>90){
            echo 'Sorry,maxLength of all feild exceeded';
        }else{
            $to='adpanchal15@gmail.com';
            $subject=$contact_subject;
            $body=$message;
            $header="From:emailForm <$email>";
            

            if(@mail($to,$subject,$body,$header)){
                echo 'Thank you for contact us.We will be in touch soon';
                
            }else{
                echo 'Error in sending email';
            }
        }
      
}
?>