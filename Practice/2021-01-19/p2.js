var aditya={
    name:'Aditya',
    age:21,
    email:'aditya@gmail.com',
    telephoneNo:'1234567890'
}

var john={
    name:'John',
    age:22,
    email:'john@gmail.com',
    telephoneNo:'4567890123'
}

var bob={
    name:'Bob',
    age:22,
    email:'bob@gmail.com',
    telephoneNo:'7890123456'
}

var arr=[aditya,john,bob];

localStorage.setItem('objectArray',JSON.stringify(arr));
console.log(arr.length);

for(var i=0;i<arr.length;i++)
    {
        var tr="<tr>";
        var td1="<td>"+arr[i]["name"]+"</td>";
        var td2="<td>"+arr[i]["age"]+"</td>";
        var td3="<td>"+arr[i]["email"]+"</td>";
        var td4="<td>"+arr[i]["telephoneNo"]+"</td></tr>";

        document.getElementById('mytable').innerHTML+=tr+td1+td2+td3+td4; 

    }  