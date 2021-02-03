function validate(){
    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;
    
   
    if(email==""){
        document.getElementById("emailErr").innerHTML="Please enter email.";
    }else{
        details.innerHTML="email:"+email+"<br>";
        document.getElementById("emailErr").innerHTML="";
    } 
    if(password==""){
        document.getElementById("passwordErr").innerHTML="Please enter password.";
    }else{
        details.innerHTML+="password:"+password+"<br>";
        document.getElementById("passwordErr").innerHTML="";
    }

    if(email=="" || password=="" ){
        details.innerHTML="";
    }
   
}