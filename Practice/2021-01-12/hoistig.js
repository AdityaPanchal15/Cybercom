/********************************
 * Hoisting
 */


 //function hoisting
 calculateAge(1990);                //before declare function

 function calculateAge(year){       
     console.log(2020-year);
 }

 calculateAge(1999);                //after declare function

 //also run when call before function that is hoisting.

 //now check hoisting for function expression
//  retirement(1956);                          //not run
 var retirement=function(year){
     console.log(65-(2020-year));
 } 

 //Note:hoisting only work for function declaration not in function expression



 //variable hoisting
 console.log(age);              //access before declare
 var age=21;
 console.log(age);
 //so it's hoisting at creation phase as undefined(prooved)