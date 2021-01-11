/**************************************
 * Arrays
 */

 //Initialize new array
 var names=['Adi','John','Belly'];
 var year=new Array(1990,1992,2000);

 console.log(names[2]);
 console.log(names.length);

 //Mutate array data
 names[0]='Mark';
 names[names.length]='Avani';  //add at last position
 console.log(names);

 //Different data types
 var Adi=['Adi','Smith',1999,'Developer'];

 Adi.push('blue');  // added at the end
 Adi.unshift('Mr.');//added at a stating
 Adi.pop()          //delete from the end 
 Adi.shift();       //delete from beginning
 console.log(Adi);

 console.log(Adi.indexOf('Smith'));     //returns position of item 
 // if specified item is not available in array it will return -1

 var isTeacher= Adi.indexOf('Teacher') === -1 ? 'not teacher' : 'teacher';
 console.log(isTeacher);

 Adi.sort();
 console.log(Adi);

 console.log(Adi.join('/'));    //join function
 console.log(Adi.concat(year)); //concat function
//  console.log(Adi.fill(21));     //fill function
 console.log(Adi.reverse());    //reverse function

 
