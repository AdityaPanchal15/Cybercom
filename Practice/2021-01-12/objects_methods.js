/************************************************
 * Objects and Methods
 */

var adi={
    firstName:'Aditya',
    lastName:'Panchal',
    birthYear:1999,
    family:['John','Bob','Avani'],
    job:'Developer',
    isMarried:false,
    calcAge: function(){
        this.age= 2020-this.birthYear;              //set properties 
    }
};

adi.calcAge();            
console.log(adi);
