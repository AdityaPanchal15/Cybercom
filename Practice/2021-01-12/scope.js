/************************************************
 * scoping
 */

 //Example 1 of scoping
// var a='Hello';      
// first();

// function first(){
//     var b='Hi';
//     second();    
//     function second(){
//         var c='Hey!';
//         console.log(a+b+c);
//     }
// }

//Example 2
var a='Hello';      
first();

function first(){
    var b='Hi';
    second();    
    function second(){
        var c='Hey!';
        third();
    }
}

function third(){
    var d='John';
    console.log(a+d);
}