console.log("from External Js ");

/****************************************
* variable and data types
*/
var name='Adi';
var age=21;//number
console.log(name);//string

var fullAge=true;
console.log(fullAge);//boolean

var car;
console.log(car);//undefined


/*********************************
* rules for declare variable
*/
var _mark=30;          //valid
//var 3marks=30;       //Invalid
//var function='myfun';   //invalid

/****************************************
 * Variable mutation and type coercion
 */

 //Type coercion
var name='Aditya';
var age=21;
var married=false;
console.log(name+' '+age+'.Is he married?'+married);

//Variable mutation
age='twenty one';
name='Adi';
//alert(name+' '+age);

// var lastName=prompt("What is your last name?");
// console.log(name+' '+lastName);

