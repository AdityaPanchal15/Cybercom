/*******************************************
 *  Functions
 */

 function calculateAge(birthYear){
     return 2020 - birthYear;
 }

 var Age=calculateAge(1999);
 console.log(Age);

 function yearUntilRetirment(year,firstName){
     var age=calculateAge(year);
     var retirment=65-age;

     if(retirment>0){
     console.log(firstName+' retires in '+ retirment+' years. ');
     }else{
         console.log(firstName+' is already retired.');
     }
 }

 yearUntilRetirment(1990,'Bob');
 yearUntilRetirment(1996,'Jihaan');