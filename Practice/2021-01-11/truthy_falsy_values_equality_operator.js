/**********************************
 * Truthy and Falsy values and equality operators
 */

 //falsy values: undefined,null,0,'',NaN
 //truthy values: Not falsy values

 var height;
 height=23;     //truethy
//  height=0;      //falsy
 
 if(height){
     console.log('Variable is defined');
 }else{
    console.log('Variable has not defined');
 }


 //Equality operator
 if(height==='23'){
     console.log('The == operator does type coercion!');
 }