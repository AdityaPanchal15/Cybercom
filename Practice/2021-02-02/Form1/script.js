function validate(){
    let name=document.getElementById("name").value;
    let password=document.getElementById("password").value;
    let address=document.getElementById("address").value;
    let age=document.getElementById("age").value;
    let file=document.getElementById("file").value;
    let details=document.getElementById("details");
    var checkedValue = null; 
    var inputElements = document.getElementsByClassName('game');

    
    if(name==""){
        document.getElementById("nameErr").innerHTML="Please enter name.";
    }else{
        details.innerHTML="name:"+name+"<br>";
        document.getElementById("nameErr").innerHTML="";
    } 
    if(password==""){
        document.getElementById("passwordErr").innerHTML="Please enter password.";
    }else{
        details.innerHTML+="password:"+password+"<br>";
        document.getElementById("passwordErr").innerHTML="";
    }
    if(address=="" ){
        document.getElementById("addressErr").innerHTML="Please enter address.";
    }else{
        details.innerHTML+="address:"+address+"<br>";
        document.getElementById("addressErr").innerHTML="";
    }
    if(document.getElementsByClassName("game").checked){
        document.getElementById("gameErr").innerHTML="Please select games.";
    }else{
        for(var i=0; inputElements[i]; ++i){
            if(inputElements[i].checked){
                if(checkedValue==null){
                 checkedValue = inputElements[i].value+",";
                }else{
                  checkedValue += inputElements[i].value+",";
                }
                 
            }
        }
        document.getElementById("gameErr").innerHTML="";
        details.innerHTML+="game:"+checkedValue+"<br>";
    }
    if(!document.getElementById("male").checked && !document.getElementById("female").checked ){
        document.getElementById("genderErr").innerHTML="Please choose gender.";
    }else{
        details.innerHTML+=(document.getElementById("male").checked ? "male" :"female")+"<br>";
        document.getElementById("genderErr").innerHTML="";
    }
    if(age=="" ){
        document.getElementById("ageErr").innerHTML="Please select age.";
    }else{
        details.innerHTML+="age:"+age+"<br>";
        document.getElementById("ageErr").innerHTML="";
    }
    if(file==""){
        document.getElementById("fileErr").innerHTML="Please choose file";
    }else{
        details.innerHTML+="file:"+file;
        document.getElementById("fileErr").innerHTML="";
    }
    
    if(name=="" || password=="" || address=="" || (document.getElementsByClassName("game").checked)
       || (!document.getElementById("male").checked && !document.getElementById("female").checked ) || age=="" || file==""){
           details.innerHTML="";
       }

}