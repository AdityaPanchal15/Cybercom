var select = document.getElementById("state");
var state = [ "Andhra Pradesh",
"Arunachal Pradesh",
"Assam",
"Bihar",
"Chhattisgarh",
"Goa",
"Gujarat",
"Haryana",
"Himachal Pradesh",
"Jammu and Kashmir",
"Jharkhand",
"Karnataka",
"Kerala",
"Madhya Pradesh",
"Maharashtra",
"Manipur",
"Meghalaya",
"Mizoram",
"Nagaland",
"Odisha",
"Punjab",
"Rajasthan",
"Sikkim",
"Tamil Nadu",
"Telangana",
"Tripura",
"Uttarakhand",
"Uttar Pradesh",
"West Bengal",
"Andaman and Nicobar Islands",
"Chandigarh",
"Dadra and Nagar Haveli",
"Daman and Diu",
"Delhi",
"Lakshadweep",
"Puducherry"];

for(var i = 0; i < state.length; i++) {
    var opt = state[i];
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    select.appendChild(el);
}

function verify() {  
    var email = document.getElementById("email").value;
    var remail = document.getElementById("remail").value;

    if(email != remail) {  
        alert("Email doesn't match");  
       return false;  
    }else{
        return true;
    }

    var pw = document.getElementById("password").value;
    var rpw = document.getElementById("rpassword").value;  
    console.log(pw);
    console.log(rpw);
    if(pw != rpw) {  
        alert("Passwords did not match");  
       return false;  
    }else{
        return true;
    }
      
  }  