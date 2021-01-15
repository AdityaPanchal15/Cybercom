
document.querySelector('#calc').addEventListener('click',function(){
    var n=document.getElementById('val').value;
    var val1=0;
    var val2=1;
    var val3;
    document.querySelector('#ans').textContent=val1+","+val2;
    for(var i=2;i<n;i++){
        val3=val1+val2;
        val1=val2;
        val2=val3;
        document.getElementById('ans').innerHTML+=","+val2;
    }
});