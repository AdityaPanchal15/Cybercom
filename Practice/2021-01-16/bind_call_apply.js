/*************************************************
 * Bind,call and apply
 */

 var john={
     name:'John',
     age:24,
     job:'teacher',
     presentation:function(style,timeOfDay){
         if(style==='formal'){
            console.log('Good '+timeOfDay+',Ladies and gentalman! I\'m '+
            this.name+',I\'m a '+ this.job+' and I\'m '+this.age+' years old.');
         }else if(style==='friendly'){
             console.log('Hey! What\'s up? I\'m '+
             this.name+',I\m a '+ this.job+'and I\'m '+this.age+'years old.Have a nice '+timeOfDay+'.');
         }
     }
 };

 var emily={
     name:'Emily',
     age:35,
     job:'designer'
 };

 john.presentation('formal','morning');

 john.presentation.call(emily,'friendly','afternoon');

//  john.presentation.apply(emily,['friendly','afternoon']);

var johnFriendly=john.presentation.bind(john,'friendly');
johnFriendly('morning');
johnFriendly('night');


var years=[1990,1965,1937,2005,1998];

 function arrayCalc(arr,fn){
     var arrRes=[];
     for(var i=0;i<arr.length;i++){
         arrRes.push(fn(arr[i]));
     }
     return arrRes;
 }

 function calcAge(el){
     return 2020-el;
 }

 function isFullAge(limit,el){
     return el>=limit;
 }

 var ages=arrayCalc(years,calcAge);
 var fullJapan=arrayCalc(ages,isFullAge.bind(this,20));
 console.log(ages);
 console.log(fullJapan);

