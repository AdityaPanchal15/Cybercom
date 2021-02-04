<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Form 3</title>
</head>
<body>
    <table>
        <form action="uploadData.php" method="post" >
        <tr class="orange"><td colspan="2">Sign Up</td></tr>
        
        <tr>
            <td><label for="firstName">First Name</label></td>
            <td><input type="text" name="firstName" id="firstName" placeholder="Enter First Name"><span class="red" id="firstNameErr"></span></td>
        </tr>
        <tr>
            <td><label for="lastName">Last Name</label></td>
            <td><input type="text" name="lastName" id="lastName" placeholder="Enter Last Name"><span class="red" id="lastNameErr"></span></td>
        </tr>
        <tr>
            <td><label for="dob">Date Of Birth</label></td>
            <td>
                <span>
                    <select name="day"  id="day">
                        <option value="null">Date</option>
                        <option value="01">1</option>
                        <option value="02">2</option>
                        <option value="03">3</option>
                        <option value="04">4</option>
                        <option value="05">5</option>
                        <option value="06">6</option>
                        <option value="07">7</option>
                        <option value="08">8</option>
                        <option value="09">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                        <option value="21">21</option>
                        <option value="22">22</option>
                        <option value="23">23</option>
                        <option value="24">24</option>
                        <option value="25">25</option>
                        <option value="26">26</option>
                        <option value="27">27</option>
                        <option value="28">28</option>
                        <option value="29">29</option>
                        <option value="30">30</option>
                        <option value="31">31</option>
                    </select>
                </span>
                <span>
                    <select name="month" id="month">
                        <option value="null">Month</option>
                        <option value="01">January</option>
                        <option value="02">February</option>
                        <option value="03">March</option>
                        <option value="04">April</option>
                        <option value="05">May</option>
                        <option value="06">June</option>
                        <option value="07">July</option>
                        <option value="08">August</option>
                        <option value="09">September</option>
                        <option value="10">Octobar</option>
                        <option value="11">November</option>
                        <option value="12">December</option>
                    </select> 
                </span>
                <span>
                    <select name="year"  id="year">
                        <option value="null">Year</option>
                        <option value="1990">1990</option>
                        <option value="1991">1991</option>
                        <option value="1992">1992</option>
                        <option value="1993">1993</option>
                        <option value="1994">1994</option>
                        <option value="1995">1995</option>
                        <option value="1996">1996</option>
                        <option value="1997">1997</option>
                        <option value="1998">1998</option>
                        <option value="1999">1999</option>
                        <option value="2000">2000</option>
                        <option value="2001">2001</option>
                        <option value="2002">2002</option>
                        <option value="2003">2003</option>
                        <option value="2004">2004</option>
                        <option value="2005">2005</option>
                        <option value="2006">2006</option>
                        <option value="2007">2007</option>
                        <option value="2008">2008</option>
                        <option value="2009">2009</option>
                        <option value="2010">2010</option>
                        <option value="2011">2011</option>
                        <option value="2012">2012</option>
                        <option value="2013">2013</option>
                        <option value="2014">2014</option>
                    </select>
                </span>
                <span class="red" id="dobErr"></span>
            </td>
        </tr>
        <tr>
            <td><label for="gender">Gender</label></td>
            <td>
                <input type="radio" name="gender" id="male" value="male"><span>Male</span>
                <input type="radio" name="gender" id="female" value="female"><span>Female</span>
                <span class="red" id="genderErr"></span>
            </td>
        </tr>
        <tr>
            <td><label for="country">Country</label></td>
            <td>
                <select name="country" id="country" >
                </select>
                <span class="red" id="countryErr"></span>
            </td>
        </tr>
        <tr>
            <td><label for="email">Email</label></td>
            <td><input type="email" name="email" id="email" placeholder="Enter E-mail"><span class="red" id="emailErr"></span></td>
        </tr>
        <tr>
            <td><label for="phone">Phone</label></td>
            <td><input type="number" name="phone" id="phone" placeholder="Enter Phone"><span class="red" id="phoneErr"></span></td>
        </tr>
        <tr>
            <td><label for="password" >Password</label></td>
            <td><input type="password" name="password" id="password" class="password lock"><span class="red" id="passwordErr"></span></td>
        </tr>
        <tr>
            <td><label for="rpassword">Confirm Password</label></td>
            <td><input type="password" name="rpassword" id="rpassword"  class="password lock"><span class="red" id="rpasswordErr"></span></td>
        </tr>
        <tr>
            <td></td>
            <td><input type="checkbox" name="agree" id="agree" required><span>I Agree to the Terms of use</span></td>
        </tr>
        <tr class="orange">
            <td colspan="2">
                <button type="reset" class="button button2">Cancel</button>
                <button type="submit" class="button button1"  onclick="return validate()">Submit</button>
            </td>
        </tr>
        </form>
    </table>
    <p id="details"></p>
    <script src="script.js"></script>
</body>
</html>