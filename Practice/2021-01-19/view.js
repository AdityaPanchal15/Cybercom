var infos=JSON.parse(localStorage.getItem("items"));
// console.log(JSON.parse(infos));
for(var i=0;i<infos.length;i++)
    {
        var tr="<tr>";
        var td1="<td>"+infos[i]["name"]+"</td>";
        var td2="<td>"+infos[i]["email"]+"</td>";
        var td3="<td>"+infos[i]["dob"]+"</td></tr>";
        document.getElementById('mytable1').innerHTML+=tr+td1+td2+td3; 

    }  