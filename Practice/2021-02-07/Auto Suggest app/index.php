<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Auto Suggest App</title>
    <script type="text/javascript">
        function findmatch(){
            if(window.XMLHttpRequest){
                xmlHttp=new XMLHttpRequest();
            }else{
                xmlHttp=new ActiveXObject('Microsoft.XMLHTTP');
            }

            xmlHttp.onreadystatechange=function(){
                if(xmlHttp.readyState==4 && xmlHttp.status==200){
                    document.getElementById('results').innerHTML=xmlHttp.responseText;
                }
            }

            xmlHttp.open('GET','search.inc.php?search_text='+document.search.search_text.value,true);
            xmlHttp.send();
        }
    </script>
</head>
<body>
    <form id="search" name="search">
        Type a name: <br>
        <input type="text" name="search_text" onkeyup="findmatch()">
        <div id="results"></div>
    </form>
</body>
</html>