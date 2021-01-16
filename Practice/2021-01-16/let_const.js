/***************************************************
 * let and const
 */

 //ES5
//  var name5='Jane';
//  var age5=23;
//  name5='Jane Miller';
//  console.log(name5);

//  //ES6
//  const name6='Adi';
//  let age=20;
//  name6='Adi Panchal';
//  console.log(name6);


 //ES5
 function driverLicence5(passedTest){
     if(passedTest){
         console.log(firstName);
         var firstName='John';
         var yearOfBirth=1999;
     }
     console.log(firstName+',born in '+yearOfBirth+'is now officially allow to drive a car.');
 }

 driverLicence5(true);

 //ES6
 function driverLicence6(passedTest){

    let firstName;
    const yearOfBirth=1999;

    if(passedTest){
        firstName='John';
        // const yearOfBirth=1999;
    }
    console.log(firstName+',born in '+yearOfBirth+'is now officially allow to drive a car.');
}
 
driverLicence6(true);





let i=23;

for(let i=0;i<5;i++){
    console.log(i);
}

console.log(i);