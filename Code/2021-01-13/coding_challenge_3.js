var bill=[124,48,268];
var paid_amount=new Array();

function calcTip(billAmount){
    var total_amount;
    if(billAmount<50){
        total_amount=(20*billAmount/100)+billAmount;
    }else if(billAmount>=50 && billAmount<=200){
        total_amount=(15*billAmount/100)+billAmount;
    }else{
        total_amount=(10*billAmount/100)+billAmount;
    }
    return total_amount;
}

paid_amount.push(calcTip(bill[0]));
paid_amount.push(calcTip(bill[1]));
paid_amount.push(calcTip(bill[2]));

for (var i = 0; i < paid_amount.length; i++) {
    console.log(paid_amount[i]);
}