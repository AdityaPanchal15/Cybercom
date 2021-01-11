/********************************************
 * Function Statement and Expression
 */

//function declaration
// function result(job,firstName);

 //function expression
 var result = function(job,firstName){
    switch(job){
        case 'teacher':
            return firstName + ' teaches kids how to code';
        case 'driver':
            return firstName + ' drives a cab';
        case 'designer':
            return firstName + ' design websites'; 
        default:
            return firstName + ' does something else'; 
    }
 }

 console.log(result('teacher','Bob'));

 alert(myfun);                                      //undefined
 var myfun=function(){
    return 5;
 }