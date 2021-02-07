<?php
// if(isset($_GET['show'])){
//     include($_GET['show']);
// }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script type="text/javascript">
        function load(thediv,thefile){
            if(window.XMLHttpRequest){
                xmlhttp=new XMLHttpRequest();
            }else{
                xmlhttp=new ActiveXObject('Microsoft.XMLHTTP');
            }
            
            xmlhttp.onreadystatechange=function(){
                if(xmlhttp.readyState==4 && xmlhttp.status==200){
                    document.getElementById(thediv).innerHTML=xmlhttp.responseText;
                }
            }

            xmlhttp.open('GET',thefile,true);
            xmlhttp.send();
        }
    </script>
    <title>Ajax</title>
</head>
<body>
    <!-- <input type="submit" onclick="window.location='index.php?show=include.inc.php'"> -->
    <input type="submit" onclick="load('adiv','include.inc.php');">
    <div id="adiv"></div>
</body>
</html>
