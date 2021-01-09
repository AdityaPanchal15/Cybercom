/****************************
 * Coding challenge 1
 */

 var massMark,massJohn,heightMark,heightJohn;
 massMark=50;
 massJohn=55;
 heightMark=5.5;
 heightJohn=5.2;

 var bmiMark,bmiJohn;
 bmiMark=massMark/(heightMark^2);    //BMI finding
 bmiJohn=massJohn/(heightJohn^2);    //BMI finding

 //console.log(bmiMark,bmiJohn);
 var higherBMI;
 higherBMI=bmiMark>bmiJohn;

 console.log("Is Mark's BMI higher than John's? ",higherBMI);