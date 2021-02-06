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
                alert('Admin already registered');
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
            sessionStorage.setItem("adminSession",JSON.stringify(user));
            window.location.href = "dashboard.html";
        }else{
            userDataArr=this.fetchUser();
            if(userDataArr.find(element=>element.email==user.email && element.password==user.password)){
                sessionStorage.setItem("userSession",JSON.stringify(user));
                window.location.href = "sub-user.html";
            }else{
                alert("Enter valid username/password");
            }
        }  
    }

    this.userDetail=function(){
        adminSession=JSON.parse(sessionStorage.getItem("adminSession"));
        if(adminSession){
            fetchAdminArr=this.fetchAdmin();
            userDataArr=this.fetchUser();
            document.getElementById("name").innerHTML="Hello,"+fetchAdminArr.name;
            adminSession=sessionStorage.getItem("adminSession");
            let row='';
            
            if(userDataArr && adminSession){
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
                document.getElementById("userstbl").innerHTML=row;
            }
        }
    }

    this.Edit=(index)=>{
         
        document.getElementById("visibleAdd").style.display="none";
        document.getElementById("visibleUpdate").style.display="block";
        // document.getElementById("label").innerHTML="Update User";
        
        userDataArr=this.fetchUser();
        document.getElementById("username").value=userDataArr[index].name;
        document.getElementById("email").value=userDataArr[index].email;
        document.getElementById("password").value=userDataArr[index].password;
        document.getElementById("dob").value=userDataArr[index].dob;

        
        
        self=this;
        document.getElementById("visibleUpdate").onclick=function(){
            let dob=document.getElementById("dob").value;
            let yearOfBirth=dob.substr(0,4);
            let mothOfBirth=dob.substr(5,2);
            let dayOfBith=dob.substr(8,2);

            let user={
                name:document.getElementById("username").value,
                email:document.getElementById("email").value,
                password:document.getElementById("password").value,
                dob:dayOfBith+"/"+mothOfBirth+"/"+yearOfBirth,
                age:ageOfUser(mothOfBirth,dayOfBith,yearOfBirth)
            }
            userDataArr.splice(index,1,user);
            localStorage.setItem("userData",JSON.stringify(userDataArr));
            self.userDetail();
            window.location.href = "users.html";
        }


    }

    this.Delete=(index)=>{
        userDataArr=this.fetchUser();
        
        if(userDataArr){
            userDataArr.splice(index,1);
            localStorage.setItem("userData",JSON.stringify(userDataArr));
        }
        this.userDetail();
    }

    this.addUser=()=>{
            adminSession=JSON.parse(sessionStorage.getItem("adminSession"));
            if(adminSession){
                // console.log(validate());
                userDataArr=this.fetchUser();
                let dob=document.getElementById("dob").value;
                let date=new Date(dob);

                let yearOfBirth=dob.substr(0,4);
                let mothOfBirth=dob.substr(5,2);
                let dayOfBith=dob.substr(8,2);
                
                console.log(ageOfUser(mothOfBirth,dayOfBith,yearOfBirth));

                let user={
                    name:document.getElementById("username").value,
                    email:document.getElementById("email").value,
                    password:document.getElementById("password").value,
                    dob:dayOfBith+"/"+mothOfBirth+"/"+yearOfBirth,
                    age:ageOfUser(mothOfBirth,dayOfBith,yearOfBirth)
                }

                
                if(userDataArr){
                    if(!userDataArr.find(element=>element.email==user.email)){
                        userDataArr.push(user);
                        localStorage.setItem("userData",JSON.stringify(userDataArr));
                    }else{
                        alert('User already exist');
                    }
                }else{
                    userDataArr=[];
                    userDataArr.push(user);
                    localStorage.setItem("userData",JSON.stringify(userDataArr));
                }
                this.userDetail();
        
            }
    }

    this.validate=()=>{
        // console.log("validate");
        let name=document.getElementById("username").value;
        let email=document.getElementById("email").value;
        let password=document.getElementById("password").value;
        let dob=document.getElementById("dob").value;
        let details='';
        console.log(name);
        if(name==""){
            details="Please Enter name<br>";
        }
        if(email==""){
            details+="Please Enter email<br>";
        }
        if(password==""){
            details+="Please Enter password<br>";
        }
        if(dob==""){
            details+="Please Enter Birthdate<br>";
        }
        if(name=="" || email=="" || password=="" || dob==""){
            document.getElementById("errors").innerHTML=details;
        }else{
            console.log("aaaaa");
            this.addUser();
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

    this.subUser=()=>{
        let data=[];
        
        data=JSON.parse(sessionStorage.getItem("userSession"));
        userDataArr=JSON.parse(localStorage.getItem("userData"));
        if(data){
            data=userDataArr.find(element=>element.email==data.email && element.password==data.password);
            document.getElementById("name").innerHTML="Hello,"+data.name;
            let dob=data.dob;
            let today=new Date();
           let birthDay=dob.substr(0,2);
           
           let birthMonth=dob.substr(3,2);
           
            let day=("0" + (today.getDay())).slice(-2);
            console.log(day);
            let month=("0" + (today.getMonth() + 1)).slice(-2);
           
            if(day==birthDay && month==birthMonth){
                document.getElementById("birthday").innerHTML="Happy Birthday!";
            }
        }
        
    }

    this.logOutUser=()=>{
        sessionStorage.removeItem("userSession");
    }
    this.logOutAdmin=()=>{
        sessionStorage.removeItem("adminSession");
    }
}