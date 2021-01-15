//function Constructor

var john={
    name:'John',
    yearOfBirth:1990,
    job:'teacher'
};

var Person = function(name,yearOfBirth,job){         //Function Constructor
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calcAge=function(){
    console.log(2020-this.yearOfBirth);
};

Person.prototype.lastName='Smith';

var john=new Person('John',1990,'Teacher');         //Instantiation
var jane=new Person('Jane',1999,'Designer');
var mark=new Person('Mark',1967,'retied');

john.calcAge();
jane.calcAge();
mark.calcAge();

console.log(john.lastName);
console.log(mark.lastName);
console.log(jane.lastName);




