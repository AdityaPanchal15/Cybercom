/*********************************
 * Coding Challenge 2
 */

 var avgTeamJohn,avgTeamMark;

 avgTeamJohn=(89+120+103)/3;
 avgTeamMark=(116+94+123)/3;

//find highest from two
 if(avgTeamJohn>avgTeamMark){
    console.log("Team John is winner with average score",avgTeamJohn);
 }else{
    console.log("Team Mark is winner with average score",avgTeamMark);
 }

 avgTeamJohn=(170+56+100)/3;
 avgTeamMark=(100+45+70)/3;


 //find highest from 2 after change value and for match draw case 
 if(avgTeamJohn>avgTeamMark){
    console.log("Team John is winner with average score",avgTeamJohn);
 }else if(avgTeamJohn<avgTeamMark){
    console.log("Team Mark is winner with average score",avgTeamMark);
 }else{
     console.log("Match is draw with average score",avgTeamJohn);
 }

 var avgTeamMarry;

 avgTeamMarry=(97+134+105)/3;

 //find highest avg point from 3 after adding 3rd team
 if(avgTeamJohn>avgTeamMark && avgTeamJohn>avgTeamMarry){
    console.log("Team John is winner with average score",avgTeamJohn);
 }else if(avgTeamMark>avgTeamJohn && avgTeamMark>avgTeamMarry){
    console.log("Team Mark is winner with average score",avgTeamMark);
 }else{
    console.log("Team Marry is winner with average score",avgTeamMarry);
 }

 avgTeamJohn=(40+70+100)/3;
 avgTeamMark=(100+50+60)/3;
 avgTeamMarry=(50+80+80)/3;

 //find highest avg point from 3 after adding 3rd team with considering match draw case
 if(avgTeamJohn>avgTeamMark && avgTeamJohn>avgTeamMarry){
    console.log("Team John is winner with average score",avgTeamJohn);
 }else if(avgTeamMark>avgTeamJohn && avgTeamMark>avgTeamMarry){
    console.log("Team Mark is winner with average score",avgTeamMark);
 }else if(avgTeamMarry>avgTeamJohn && avgTeamMarry>avgTeamMark){
    console.log("Team Marry is winner with average score",avgTeamMarry);
 }else{
     console.log("Match is draw with average score",avgTeamJohn);
 }


