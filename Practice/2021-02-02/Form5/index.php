<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Form 5</title>
</head>
<body>
    <div class="container">
        <br>
        <form action="login.php" method="post" >
            <table>
                <tr>
                    <th><span><img src="lock-xxl.png" alt="lock"></span>Sign In</th>
                </tr>
                <tr>
                    <td><label for="email">Email address</label></td>
                </tr>
                <tr>
                    <td><input type="email" name="email" id="email"><span class="red" id="emailErr"></span></td>
                </tr>
                 <tr>
                    <td><label for="password">Password</label></td>
                 </tr>
                 <tr>
                     <td><input type="password" name="password" id="password"><span class="red" id="passwordErr"></span></td>
                 </tr>
                 <tr>
                    <td class ="round"><button type="submit" class="button button1" onclick="return validate()">Submit</button></td>
                 </tr>
                
            </table>
        </form>
    </div>
    <p id="details"></p>
    <script src="script.js"></script>
</body>
</html>