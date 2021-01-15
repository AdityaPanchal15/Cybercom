// var A={
//     name:'Aditya',
//     dept:null
// };


var A=null;                     //if A is null when access json then it will generate error for "if(A.dep)" 

if(A && A.dept){                //keep habit to check A also instead of
    console.log(A);
}

if(A.dept){                     //don't do   
    console.log(A);
}
