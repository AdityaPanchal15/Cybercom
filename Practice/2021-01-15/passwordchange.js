function change(){
    var c,res='*';
    c=document.getElementById('password').value;
    // console.log(c.length);
    for(var i=0;i<c.length-1;i++){
        res+='*';
    }
    document.getElementById('password').value=res;
}