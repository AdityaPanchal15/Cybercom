/****************************************
 * Closures
 */

 function retirement(retirementAge){
     var a=' years left until retirement.';
     return function(yearOfBirth){
         var age=2020-yearOfBirth;
         console.log((retirementAge-age)+a);
     }
 }

 var retirementUS=retirement(66);       //1st way
 retirementUS(1990);                    //a is access in inner fuction,here retirement function already pop from execution stack after return function ,it is closure.

 retirement(66)(1990);                  //2nd way

 function interviewQuestion(job){
     return function(name){
         if(job === 'designer'){
            console.log(name + ',can you please explain what UX design is?');
         }else if(job === 'teacher'){
            console.log('What subject do you teach,'+name+'?');
         }else{
            console.log('Hello '+name+',what do you do?');
         }
     }
 }

 interviewQuestion('teacher')('John');

