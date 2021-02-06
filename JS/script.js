var app=new function(){

    let dataArr=[];
    let fetchAdminArr=[];

    // this.fetchAll=()=>{
    //     fetchedItems=JSON.parse(localStorage.getItem("registeration"));
    //     return fetchedItems;
    // }
    this.fetchAdmin=()=>{
        fetchedItems=JSON.parse(localStorage.getItem("adminData"));
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
}