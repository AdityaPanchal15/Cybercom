//Diff between for and for/in

var arr=['adi','John',1990,26];
for(var i=0;i<arr.length;i++){
    console.log(arr[i]);
}
for(val in arr){
    console.log(arr[val]);
}


//////////////////////////
var A = { x: 'abc' }
for (x in A){
console.log(A.x);
}

console.log(A);////////


/////////////////////////

var B={
    func:'Adi',
    func:function() {
        return this.func;
    }
}

console.log(B.func);



//////////////////////////
var box5={
    color:'green',
    position:1,
    clickMe:function(){

        var self=this;
        document.querySelector('.green').addEventListener('click',function(){
            var str='This is box number '+self.position+' and it is '+self.color;
            alert(str);
        });
    }
}
box5.clickMe();

////////////////////////////////////////////
var B={
    name:'Adi',
    makeCounter:function() {
      var self=this;            //parent's property
        return function() {
          return 'For object prop:'+this.name+'    /For global:'+self.name;
        }
      }
}
var name='aa';                      //global
console.log(B.makeCounter()());