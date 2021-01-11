/***********************************
 * Ternary Operator and Switch Statement
 */

 var firstName='Bob';
var age=18;

// Ternary Operator
age >= 18 ? console.log(firstName + ' drink beer.'):console.log(firstName + ' drink juice.');

var drink= age>=18?'beer':'juice';
console.log(drink);  

//Switch operator
var choice=3;
switch(choice){
    case 1:
        console.log('choice is 1');
        break;
    case 2:
        console.log('choice is 2');
        break;
    case 3:
        console.log('choice is 3');
        break;
    default:
        console.log('Enter valid choice');
}
