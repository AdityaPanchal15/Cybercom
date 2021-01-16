/**************************************
 * String in ES6
 */

 let firstName='John';
 let lastName='Smith';
 const yearOfBirth=1999;
 
 function calcAge(year){
     return 2020-year;
 }


 //ES5
 console.log('This is '+firstName+' '+lastName+'.He was born in '+yearOfBirth+'.Today,he is '+calcAge(yearOfBirth)+'years old. ');

 //ES6
 console.log(`This is ${firstName} ${lastName}.He was born in ${yearOfBirth} .Today he is ${calcAge(yearOfBirth)} years old.`);

 const n = `${firstName} ${lastName}`;
 console.log(n.startsWith('J'));
 console.log(n.endsWith('th'));
 console.log(n.includes('oh'));
 console.log(`${firstName} `.repeat(5));