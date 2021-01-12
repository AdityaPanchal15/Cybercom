/*********************************************
 * Objects and Properties
 */

 //Object literals
 var john={
     firstName:'Aditya',
     lastName:'Panchal',
     birthYear:1999,
     family:['John','Bob','Avani'],
     job:'Developer',
     isMarried:false
 };

 console.log(john.firstName);
 console.log(john['lastName']);
 var x = 'birthYear';
 console.log(john[x]);

 john.job='designer';
 console.log(john);

 //new Object syntax
 var jane=new Object();
 jane.firstName='Jane';
 jane.birthYear=1967;
 jane['lastName']='Smith';
 console.log(jane);