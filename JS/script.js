var app=new function(){

    let userDataArr=[];
    let fetchAdminArr=[];

    // this.fetchAll=()=>{
    //     fetchedItems=JSON.parse(localStorage.getItem("registeration"));
    //     return fetchedItems;
    // }
    this.fetchAdmin=()=>{
        fetchedItems=JSON.parse(localStorage.getItem("adminData"));
        return fetchedItems;
    }
    this.fetchUser=()=>{
        fetchedItems=JSON.parse(localStorage.getItem("userData"));
        return fetchedItems;
    }
    
    this.registration=()=>{

        let password=document.getElementById("rpassword").value;
        let rpassword=document.getElementById("rpassword").value;

        
        let user={
            name:document.getElementById("name").value,
            email:document.getElementById("email").value,
            password:document.getElementById("password").value,
            city:document.getElementById("city").value,
            state:document.getElementById("state").value
        }

        if(password==rpassword){
            console.log(password);
            fetchAdmin=JSON.parse(localStorage.getItem("adminData"));
            
            if(!fetchAdmin){
                localStorage.setItem("adminData",JSON.stringify(user));
                window.location.href = "login.html";
            }else{
                alert('“Admin already registered');
            }
        } 
    }

    this.checkAdmin=()=>{
        fetchAdminArr=this.fetchAdmin();
        if(fetchAdminArr){
            document.getElementById('active').style.display='none';
        }    
    }

    this.login=()=>{
        fetchAdminArr=this.fetchAdmin();
        let user={
            email:document.getElementById("email").value,
            password:document.getElementById("password").value
        }
        // console.log(fetchAdminArr.name);
        if(fetchAdminArr.email==user.email && fetchAdminArr.password==user.password){
            window.location.href = "dashboard.html";
        }else{
            alert('login fail');
        }  
    }

    this.userDetail=()=>{
        fetchAdminArr=this.fetchAdmin();
        userDataArr=this.fetchUser();
        document.getElementById("name").innerHTML="Hello,"+fetchAdminArr.name;

        let row='';
            
        for(let i=0;i<userDataArr.length;i++){
            row+="<tr>";
            row+="<td>"+userDataArr[i].name+"</td>";
            row+="<td>"+userDataArr[i].email+"</td>";
            row+="<td>"+userDataArr[i].password+"</td>";
            row+="<td>"+userDataArr[i].dob+"</td>";
            row+="<td>"+userDataArr[i].age+"</td>";
            row+='<td><button onclick="app.Edit('+ i +')">Edit</button></td>';
            row+='<td><button onclick="app.Delete('+ i +')">Delete</button></td>';
            row+="</tr>";
        }
        document.getElementById("users").innerHTML=row;

    }

    this.addUser=()=>{
        userDataArr=this.fetchUser();
        let dob=document.getElementById("dob").value;
        let yearOfBirth=dob.substr(0,4);
        let mothOfBirth=dob.substr(5,2);
        let dayOfBith=dob.substr(8,2);
        
        console.log(ageOfUser(mothOfBirth,dayOfBith,yearOfBirth));

        let user={
            name:document.getElementById("username").value,
            email:document.getElementById("email").value,
            password:document.getElementById("password").value,
            dob:document.getElementById("dob").value,
            age:ageOfUser(mothOfBirth,dayOfBith,yearOfBirth)
        }

        
        if(userDataArr){
            userDataArr.push(user);
            localStorage.setItem("userData",JSON.stringify(userDataArr));

        }else{
            userDataArr=[];
            userDataArr.push(user);
            localStorage.setItem("userData",JSON.stringify(userDataArr));
        }
        
    }

    let ageOfUser=function(birth_month,birth_day,birth_year){
        today_date = new Date();
        today_year = today_date.getFullYear();
        today_month = today_date.getMonth();
        today_day = today_date.getDate();
        age = today_year - birth_year;

        if ( today_month < (birth_month - 1))
        {
            age--;
        }
        if (((birth_month - 1) == today_month) && (today_day < birth_day))
        {
            age--;
        }
        return age;
    }
}