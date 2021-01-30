<?php
    $nameErr=$emailErr=$websiteErr=$genderErr=$subjectErr=$agree="";
    $name=$email=$class=$gender=$course=$subject="";
    
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        if(empty($_POST['name'])){
            $nameErr='Name is required.';
        }else{
            $name=test_input($_POST["name"]);
        }

        if(empty($_POST['email'])){
            $emailErr='Email is required.';
        }else{
            $email=test_input($_POST["email"]);
            // check if e-mail address is well-formed
            if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
                $emailErr = "Invalid email format"; 
             }
        }
    }

        if(empty($_POST['course'])){
            $websiteErr='course is required.';
        }else{
            $course=$_POST['course'];
        }

        if(empty($_POST['gender'])){
            $genderErr='gender is required.';
        }else{
            $gender=$_POST['gender'];
        }

        if(empty($_POST['class'])){
            $class="";
        }else{
            $class=test_input($_POST["class"]);
        }

        if(empty($_POST['subject'])){
            $subjectErr="You need to select atleast 1 subject";
        }else{
            $subject=$_POST['subject'];
        }

        if(empty($_POST['checked'])){
            $agree="You must agree to terms";
        }else{
            $agree="";
        }

        function test_input($data) {
            $data = trim($data);
            $data = stripslashes($data);
            $data = htmlspecialchars($data);
            return $data;
         }
    

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Form</title>
    <style>
         .error {color: red;}
    </style>
</head>
<body>
    <p><span class = "error">* required field.</span></p>
    <form method = "POST" action = "<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
        <table>
            <tr>
               <td>Name:</td>
               <td><input type = "text" name = "name">
                  <span class = "error">* <?php echo $nameErr;?></span>
               </td>
            </tr>
            
            <tr>
               <td>E-mail: </td>
               <td><input type = "text" name = "email">
                  <span class = "error">* <?php echo $emailErr;?></span>
               </td>
            </tr>
            
            <tr>
               <td>Time:</td>
               <td> <input type = "text" name = "course">
                  <span class = "error">* <?php echo $websiteErr;?></span>
               </td>
            </tr>
            
            <tr>
               <td>Classes:</td>
               <td> <textarea name = "class" rows = "5" cols = "40"></textarea></td>
            </tr>
            
            <tr>
               <td>Gender:</td>
               <td>
                  <input type = "radio" name = "gender" value = "female">Female
                  <input type = "radio" name = "gender" value = "male">Male
                  <span class = "error">* <?php echo $genderErr;?></span>
               </td>
            </tr>
            
            <tr>
               <td>Select:</td>
               <td>
                  <select name = "subject[]" size = "4" multiple>
                     <option value = "Android">Android</option>
                     <option value = "Java">Java</option>
                     <option value = "C#">C#</option>
                     <option value = "Data Base">Data Base</option>
                     <option value = "Hadoop">Hadoop</option>
                     <option value = "VB script">VB script</option>
                  </select>
                  <span class = "error">* <?php echo $subjectErr;?></span>
               </td>
            </tr>
            
            <tr>
               <td>Agree</td>
               <td><input type = "checkbox" name = "checked" >
                    <span class = "error">* <?php echo $agree;?></span>
               </td>
            </tr>
            
            <tr>
               <td>
                  <input type = "submit" name = "submit" value = "Submit"> 
               </td>
            </tr>
         </table>
    </form>

    <?php
         echo "<h2>Your Information :</h2>";
         echo ("<p>name:$name</p>");
         echo ("<p>email: $email</p>");
         echo ("<p>class time: $course</p>");
         echo ("<p>class info: $class </p>");
         echo ("<p>gender: $gender</p>");
        //  $length=count($subject);
         if(isset($_POST['subject'])){
            for($i = 0; $i < count($subject); $i++) {
                echo($subject[$i] . " ");
            }
         }
         
    ?>
</body>
</html>