function validate(){
    let firstName=document.getElementById("firstName").value;
    let password=document.getElementById("password").value;
    let address=document.getElementById("address").value;
    let dob=document.getElementById("day").value+"/"+document.getElementById("month").value+"/"+document.getElementById("year").value;
    var checkedValue = null;
    // let agree=document.getElementById("agree").checked;
    let details=document.getElementById("details");
    var inputElements = document.getElementsByClassName('game');


    

   
    if(firstName==""){
        document.getElementById("firstNameErr").innerHTML="Please enter name.";
    }else{
        details.innerHTML="name:"+firstName+"<br>";
        document.getElementById("firstNameErr").innerHTML="";
    } 

    if(password==""){
        document.getElementById("passwordErr").innerHTML="Please enter password.";
    }else{
        details.innerHTML+="password:"+password+"<br>";
        document.getElementById("passwordErr").innerHTML="";
    }

    if(!document.getElementById("male").checked && !document.getElementById("female").checked ){
        document.getElementById("genderErr").innerHTML="Please choose gender.";
    }else{
        details.innerHTML+=(document.getElementById("male").checked ? "male" :"female")+"<br>";
        document.getElementById("genderErr").innerHTML="";
    }

    if(address=="" ){
        document.getElementById("addressErr").innerHTML="Please enter address.";
    }else{
        details.innerHTML+="address:"+address+"<br>";
        document.getElementById("addressErr").innerHTML="";
    }

    if(dob=="" ){
        //nothing
    }else{
        details.innerHTML+="D.O.B:"+dob+"<br>";
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

    if(!document.getElementById("married").checked && !document.getElementById("unmerried").checked ){
        document.getElementById("statusErr").innerHTML="Please choose status.";
    }else{
        details.innerHTML+=(document.getElementById("married").checked ? "married" :"unmarried")+"<br>";
        document.getElementById("statusErr").innerHTML="";
    }

    if(firstName=="" || password=="" || (!document.getElementById("male").checked && !document.getElementById("female").checked)
        || address=="" || dob=="" || document.getElementsByClassName("game").checked || 
        (!document.getElementById("married").checked && !document.getElementById("unmerried").checked)){

            details.innerHTML="";
            return false;
    }else{
        return true;
    }
    
}