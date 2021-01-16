//1.
let array = [0, 1, 2, 3 ,4 , 5 , 6 , 7 , 8 , 9];
console.log(array.slice(1));
console.log(array.slice(-1));

//2.
const dynamic = "model";
const item = {
  brand: "Porsche",
  [dynamic]: "Panamera"
}

console.log(item);

//3.
doSomethingVeryCool = (coolParameter) => {
    const coolThing = coolParameter || "This is not so cool"
    console.log(coolThing);
 }
 doSomethingVeryCool("This is super cool") 

 doSomethingVeryCool() 

 //4.
 let values = [13, 2, 27, 90, 8, 57, 34]; 
 let sum = values.reduce((previos,current)=>current+=previos);
 let avg = sum / values.length;
 console.log(avg);

//  'use strict';

//  {
//  function f() {
//    return 1;
//  }
// }
 
//  {
//    function f() {
//      return 2;
//    }
//  }
//  console.log(f());

if ('function' === typeof window.noFunc) {
    // use noFunc()
  } else {
    // do something else
  }



//   define three functions using three different ways:-
//      1. function declaration
//      2. function expression
//      3. function constructor

var p = 5;
function myFunc() {
    var p = 9;

    function decl() {
        console.log(p);
    }
    var expr = function() {
        console.log(p);
    };
    var cons = new Function('\tconsole.log(p);');

    decl();     //9
    expr();     //9
    cons();     //5
    
}
myFunc();




//Example of Block scope
for(let i=0;i<10;i++){
    console.log(i);
}
//  console.log("The value of i:" + i)         //error