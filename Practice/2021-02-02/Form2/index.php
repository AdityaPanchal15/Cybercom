<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Form 2</title>
</head>
<body>
    <center>
    <div class="container">
        <form action="uploadData.php" method="post" >
            <fieldset>
                <legend>User Form</legend>
                    <table>
                        <ul>
                            <tr>
                                <td><li><label for="firstName">FIRST NAME</label></li></td>
                                <td><input type="text" name="firstName" id="firstName"><span class="red" id="firstNameErr"></span></td>
                                
                            </tr>
                            <tr>
                                <td><li><label for="password">PASSWORD</label></li></td>
                                <td> <input type="password" name="password" id="password"><span class="red" id="passwordErr"></span></td>
                            </tr>
                            <tr>
                                <td><li><label for="gender">GENDER</label></li></td>
                                <td>
                                    <input type="radio" name="gender" id="male" value="male"><span>Male</span>
                                    <input type="radio" name="gender" id="female" value="female"><span>Female</span>
                                    <span class="red" id="genderErr"></span>
                                </td>
                            </tr>
                            <tr>
                                <td><li><label for="address">ADDRESS</label></li></td>
                                <td><textarea name="address" id="address" cols="25" rows="3"></textarea><span class="red" id="addressErr"></span></td>
                            </tr>
                            <tr>
                            <td><li><label for="dob">D.O.B</label></li></td>
                                 <td> <span>
                                        <select name="month" id="month" class="ageGroup arrows dob" >
                                            <option value="01">Jan</option>
                                            <option value="02">Feb</option>
                                            <option value="03">March</option>
                                            <option value="04">April</option>
                                            <option value="05">May</option>
                                            <option value="06">June</option>
                                            <option value="07">July</option>
                                            <option value="08">Aug</option>
                                            <option value="09">Sep</option>
                                            <option value="10">Oct</option>
                                            <option value="11">Nov</option>
                                            <option value="12">Dec</option>
                                        </select> 
                                </span>
                                <span>
                                        <select name="day"  id="day"  class="ageGroup arrows dob">
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
                                        <select name="year"  id="year"  class="ageGroup arrows dob">
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
                                    </td>
                                </tr>
                               
                                <tr>
                                    <td><li><label for="game">SELECT GAME</label></li></td>
                                    <td>
                                        <input type="checkbox" name="game[]" class="game" value="hockey"><span>Hockey</span>
                                        <input type="checkbox" name="game[]" class="game" value="football"><span>Football</span>
                                        <input type="checkbox" name="game[]" class="game" value="cricket"><span>cricket</span>
                                        <input type="checkbox" name="game[]" class="game" value="vollyball"><span>Vollyball</span>
                                        <span class="red" id="gameErr"></span>
                                    </td>
                                </tr>
                                <tr>
                                    <td><li><label for="status">MARITAL STATUS</label></li></td>
                                    <td>
                                        <input type="radio" name="status" id="married" value="married"><span>Married</span>
                                        <input type="radio" name="status" id="unmerried" value="unmerried"><span>Unmerried</span>
                                        <span class="red" id="statusErr"></span>
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="2">
                                        <center>
                                        <button type="submit" onclick="return validate()">Submit</button>
                                        <button type="reset">Reset</button>
                                        </center>
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="2"><center><input type="checkbox" name="agree" id="agree" required><span>I accept this agreement</span></center> </td>
                                </tr>
                            </ul>
                    </table>
            </fieldset>
        </form>
    </div>
</center>
<p id="details"></p>
<script src="script.js"></script>
</body>
</html>