<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Form 4</title>
</head>
<body>
    <form action="mail.php" method="post">
        <table>
            <tr>
                <th>Contact Us</th>
            </tr>
            <tr>
                <td><input type="text" name="name" id="name" placeholder="Name..."><span class="red" id="nameErr"></span></td>
            </tr>
            <tr>
                <td><input type="email" name="email" id="email" placeholder="Email..."><span class="red" id="emailErr"></span></td>
            </tr>
            <tr>
                <td><input type="text" name="subject" id="subject" placeholder="Subject..."><span class="red" id="subjectErr"></span></td>
            </tr>
            <tr>
                <td><textarea name="message" id="message" cols="30" rows="3" placeholder="Message..."></textarea><span class="red" id="messageErr"></span></td>
            </tr>
            <tr>
                <td><button type="submit" onclick="return validate()">Send Message</button></td>
            </tr>
        </table>
    </form>
    <p id="details"></p>
    <script src="script.js"></script>
</body>
</html>