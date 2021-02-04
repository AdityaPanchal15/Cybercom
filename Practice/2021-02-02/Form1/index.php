<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Form 1</title>
</head>
<body>
    <form action="uploadData.php" method="post" enctype="multipart/form-data">
    <table>
        <tr>
            <th colspan="2">User Form</th>
        </tr>
        <tr>
            <td>Enter Name</td>
            <td><input type="text" name="name" id="name" ><span class="red" id="nameErr"></span></td>
        </tr>
        <tr>
            <td>Enter Password</td>
            <td><input type="password" name="password" id="password" ><span class="red" id="passwordErr"></span></td>
        </tr>
        <tr>
            <td>Enter Address</td>
            <td><textarea name="address" id="address" cols="25" rows="3" ></textarea><span class="red" id="addressErr"></span></td>
        </tr>
        <tr>
            <td>Select Game</td>
            <td>
                <input type="checkbox" name="game[]" class="game" value="hockey"><span>Hockey</span><br>
                <input type="checkbox" name="game[]" class="game" value="football"><span>Football</span><br>
                <input type="checkbox" name="game[]" class="game" value="badminton"><span>Badminton</span><br>
                <input type="checkbox" name="game[]" class="game" value="cricket"><span>cricket</span><br>
                <input type="checkbox" name="game[]" class="game" value="vollyball"><span>Vollyball</span>
                <span class="red" id="gameErr"></span>
            </td>
        </tr>
        <tr>
            <td>Gender</td>
            <td>
                <input type="radio" name="gender" id="male" value="male"><span>Male</span>
                <input type="radio" name="gender" id="female" value="female"><span>Female</span><span class="red" id="genderErr"></span>
            </td>
        </tr>
        <tr>
            <td>Select ur age</td>
            <td>
                <select name="age" id="age" >
                    <option value="">Select</option>
                    <option value="below 10">Below 10</option>
                    <option value="between 11 to 18">Between 11 to 18</option>
                    <option value="between 19 to 50">Between 19  to 50</option>
                    <option value="above 50">Above 50</option>
                  </select>
                  <span class="red" id="ageErr"></span>
            </td>
        </tr>
        <tr>
            <td colspan="2">
                <center><input type="file" name="file" id="file" ><span class="red" id="fileErr"></span></center>
            </td>
        </tr>
        <tr>
            <td colspan="2">
                <center><button type="reset">Reset</button>
                <button type="submit" onclick="return validate()">Submit Form</button></center>
            </td>
        </tr>
    </table>
    </form>

    <p id="details"></p>
    <script src="script.js"></script>
</body>
</html>