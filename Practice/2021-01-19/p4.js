var infos=[];

var myInfo=(ev)=>{
    ev.preventDefault();
    
    var info={
        name:document.getElementById('name').value,
        email:document.getElementById('email').value,
        dob:document.getElementById('dob').value
    } 
    infos.push(info);   
    console.log(infos);
    localStorage.setItem('items',JSON.stringify(infos));
    window.open('view.html', '_blank');
    
}

// console.log(infos);

    document.getElementById('btn').addEventListener('click',myInfo);

