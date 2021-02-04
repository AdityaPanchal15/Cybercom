    
    function validate(){
        let name=document.getElementById("name").value;
        let subject=document.getElementById("subject").value;
        let message=document.getElementById("message").value;
        let email=document.getElementById("email").value;
       
       
        
        if(name==""){
            document.getElementById("nameErr").innerHTML="Please enter name.";
        }else{
            details.innerHTML="Name:"+name+"<br>";
            document.getElementById("nameErr").innerHTML="";
        } 
    
        if(email==""){
            document.getElementById("emailErr").innerHTML="Please enter email.";
        }else{
            details.innerHTML+="Email Address:"+email+"<br>";
            document.getElementById("emailErr").innerHTML="";
        } 

    
        if(subject==""){
            document.getElementById("subjectErr").innerHTML="Please enter subject.";
        }else{
            details.innerHTML+="subject:"+subject+"<br>";
            document.getElementById("subjectErr").innerHTML="";
        }
    
        if(message==""){
            document.getElementById("messageErr").innerHTML="Please enter message.";
        }else{
            details.innerHTML+="message:"+message+"<br>";
            document.getElementById("messageErr").innerHTML="";
        }
    
        if(name=="" || email=="" || subject=="" || message==""){
                details.innerHTML="";
                return false;
        }else{
            return true;
        }
    
        
    }