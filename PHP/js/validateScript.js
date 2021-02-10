function validate(){
    prefix=document.getElementById("prefix").value;
    firstName=document.getElementById("firstName").value;
    lastName=document.getElementById("lastName").value;
    email=document.getElementById("email").value;
    number=document.getElementById("number").value;
    password=document.getElementById("password").value;
    rpassword=document.getElementById("rpassword").value;
    information=document.getElementById("information").value;
    agree=document.getElementById("agree").value;

    if(prefix==""){
        document.getElementById("prefixErr").innerHTML="Select prefix";
    }else{
        document.getElementById("prefixErr").innerHTML="";
    }
    if(firstName==""){
        document.getElementById("firstNameErr").innerHTML="Enter firstname";
    }else{
        document.getElementById("firstNameErr").innerHTML="";
    }
    if(lastName==""){
        document.getElementById("lastNameErr").innerHTML="Enter lastname";
    }else{
        document.getElementById("lastNameErr").innerHTML="";
    }
    if(email==""){
        document.getElementById("emailErr").innerHTML="Enter email";
    }else{
        document.getElementById("emailErr").innerHTML="";
    }
    if(number==""){
        document.getElementById("numberErr").innerHTML="Enter mobile number";
    }else{
        document.getElementById("numberErr").innerHTML="";
    }
    if(password==""){
        document.getElementById("passwordErr").innerHTML="Enter password";
    }else{
        document.getElementById("passwordErr").innerHTML="";
    }
    
    if(rpassword==""){
        document.getElementById("rpasswordErr").innerHTML="Re-type Password";
    }else if(password!=rpassword){
        document.getElementById("rpasswordErr").innerHTML="Password not match";
    }else{
        document.getElementById("rpasswordErr").innerHTML="";
    }
    if(information==""){
        document.getElementById("informationErr").innerHTML="Enter information";
    }else{
        document.getElementById("informationErr").innerHTML="";
    }

    if(!document.getElementById("agree").checked){
        document.getElementById("agreeErr").innerHTML="Agree terms and condition";
    }else{
        document.getElementById("agreeErr").innerHTML="Agree terms and condition";
    }

    if(prefix=="" || firstName=="" || lastName=="" || email=="" || number=="" || password=="" || rpassword=="" || information=="" || (password!=rpassword) || (!document.getElementById("agree").checked)){
        return false;
    }else{
        return true;
    }
    
}