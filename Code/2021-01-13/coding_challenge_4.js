var john={
    fullName:'John',
    mass:50,
    height:1.68,
    calcBMI:function(){
        return this.mass/(this.height^2);
    }
};

var mark={
    fullName:'Mark',
    mass:65,
    height:1.5,
    calcBMI:function(){
        return this.mass/(this.height^2);
    }
};

if(john.calcBMI()>mark.calcBMI()){
    console.log('Full Name:'+john.fullName+', BMI: '+john.calcBMI());
}else if(john.calcBMI()<mark.calcBMI()){
    console.log('Full Name:'+mark.fullName+', BMI: '+mark.calcBMI());
}else{
    console.log('Match draw between '+john.fullName+' & '+ mark.fullName);
}
