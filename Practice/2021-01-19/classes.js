/******************************************************
 * Classes
 */

 //ES5
 var Person=function(name,yearOfBirth,job){
     this.name=name;
     this.yearOfBirth=yearOfBirth;
     this.job=job;
 }

 Person.prototype.calcAge=function(){
     var age=new Date().getFullYear-this.yearOfBirth;
     console.log(age);
 }

 var john5=new Person('John',1999,'teacher');

 //ES6
 class Person6{
     constructor(name,yearOfBirth,job){
         this.name=name;
         this.yearOfBirth=yearOfBirth;
         this.job=job;
     }

     calcAge(){
        var age=new Date().getFullYear-this.yearOfBirth;
        console.log(age);
     }

     static greeting(){
         console.log('Hey there!');
     }
 }

 const john6=new Person6('John',1999,'teacher');
 Person6.greeting();