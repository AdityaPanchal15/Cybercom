/********************************************
 * Arrays in ES6
 */

 const boxes=document.querySelectorAll('.box');

 //ES5
 
 var boxesArr5=Array.prototype.slice.call(boxes);
 
 boxesArr5.forEach(function(cur) {
     cur.style.backgroundColor='dodgerblue';
 });


//ES6
const boxesArr6=Array.from(boxes);
Array.from(boxes).forEach(cur=>
cur.style.backgroundColor='dodgerblue'
);


////////////////////////////////////////////////////
//ES5
/*
for(var i=0;i<boxesArr5.length;i++){
    if(boxesArr5[i].className==='box blue'){
        continue;
    }

    boxesArr5[i].textContent='I changed to blue';
}
*/


//ES6
for(const cur of boxesArr6){
    if(cur.className.includes('blue')){
        continue;
    }
    cur.textContent='I changed to blue';
}



/////////////////////////////////////////////////////
//ES5
var age=[12,17,21,14,11];

var full=age.map(function(cur){
    return cur>=18;
});
console.log(full);

console.log(full.indexOf(true));
console.log(age[full.indexOf(true)]);


//ES6
console.log(age.findIndex(cur=> cur>=18));
console.log(age.find(cur=>cur>=18));