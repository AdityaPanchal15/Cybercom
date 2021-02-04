window.onload=function (){

let country_list = ["Country","Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];

let country=document.querySelector("#country");

let arr="";
country_list.forEach(element => {
    arr +="<option value="+element+">"+element+"</option>";
});

country.innerHTML=arr;
}

function validate(){
    let firstName=document.getElementById("firstName").value;
    let lastName=document.getElementById("lastName").value;
    let dob=document.getElementById("day").value+"/"+document.getElementById("month").value+"/"+document.getElementById("year").value;
    let country=document.getElementById("country").value;
    let email=document.getElementById("email").value;
    let phone=document.getElementById("phone").value;
    let password=document.getElementById("password").value;
    let rpassword=document.getElementById("rpassword").value;
    let details=document.getElementById("details");
   
    
    if(firstName==""){
        document.getElementById("firstNameErr").innerHTML="Please enter firstName.";
    }else{
        details.innerHTML="First Name:"+firstName+"<br>";
        document.getElementById("firstNameErr").innerHTML="";
    } 

    if(lastName==""){
        document.getElementById("lastNameErr").innerHTML="Please enter lastName.";
    }else{
        details.innerHTML+="Last Name:"+lastName+"<br>";
        document.getElementById("lastNameErr").innerHTML="";
    } 

    if(dob=="null/null/null"){
        document.getElementById("dobErr").innerHTML="Please enter dob.";
    }else{
        details.innerHTML+="D.O.B:"+dob+"<br>";
        document.getElementById("dobErr").innerHTML="";
    } 

    if(!document.getElementById("male").checked && !document.getElementById("female").checked ){
        document.getElementById("genderErr").innerHTML="Please choose gender.";
    }else{
        details.innerHTML+=(document.getElementById("male").checked ? "male" :"female")+"<br>";
        document.getElementById("genderErr").innerHTML="";
    }

    if(country=="Country"){
        document.getElementById("countryErr").innerHTML="Please enter country.";
    }else{
        details.innerHTML+="country:"+country+"<br>";
        document.getElementById("countryErr").innerHTML="";
    }

    if(email==""){
        document.getElementById("emailErr").innerHTML="Please enter email.";
    }else{
        details.innerHTML+="email:"+email+"<br>";
        document.getElementById("emailErr").innerHTML="";
    }

    if(phone==""){
        document.getElementById("phoneErr").innerHTML="Please enter phone.";
    }else{
        details.innerHTML+="phone:"+phone+"<br>";
        document.getElementById("phoneErr").innerHTML="";
    }

    if(password==""){
        document.getElementById("passwordErr").innerHTML="Please enter password.";
    }else{
        if(password==rpassword){
            details.innerHTML+="password:"+password+"<br>";
            document.getElementById("passwordErr").innerHTML="";
        }else{
            document.getElementById("passwordErr").innerHTML="Password does not match";

        }
    }

    if(firstName=="" || lastName=="" || dob=="null/null/null" || (!document.getElementById("male").checked && !document.getElementById("female").checked)
        || country=="Country" || email=="" || phone=="" || password=="" || rpassword=="" || password!=rpassword){

            details.innerHTML="";
            return false;
    }else{
        return true;
    }

    
}