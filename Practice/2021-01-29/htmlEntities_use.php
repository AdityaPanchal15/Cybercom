<?php
    if(isset($_GET['day'])&& isset($_GET['date'])&& isset($_GET['year'])){
        $day=htmlentities($_GET['day']);
        $date=htmlentities($_GET['date']);
        $year=htmlentities($_GET['year']);

        if(!empty($day)&&!empty($date)&&!empty($year)){
            echo "It is $day $date $year";
        }else{
            echo 'Fill in all field.';
        }
    }
?>

<form action="htmlEntities_use.php" method="get">
    Day: <br><input type="text" name="day"> <br>
    Date: <br><input type="text" name="date"> <br>
    Year: <br><input type="text" name="year"> <br>
    <input type="submit" value="submit">
</form>