<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Post Data</title>
    <script type="text/javascript">
        function insert(){
           if(window.XMLHttpRequest){
                xmlHttp=new XMLHttpRequest();
           }else{
                xmlHttp=new ActiveXObject('Microsoft.XMLHTTP');                
           }

           xmlHttp.onreadystatechange=function(){
               if(xmlHttp.readyState==4 && xmlHttp.status==200){
                   document.getElementById('message').innerHTML=xmlHttp.responseText;
               }
           }

           parameters='text='+document.getElementById('text').value;

           xmlHttp.open('POST','update.inc.php',true);
           xmlHttp.setRequestHeader('Content-type','application/x-www-form-urlencoded');
           xmlHttp.send(parameters);
        }
    </script>
</head>
<body>
    Insert: <input type="text" name="text" id="text">
    <input type="submit" value="submit" onclick="insert()">
    
    <div id="message"></div>
</body>
</html>