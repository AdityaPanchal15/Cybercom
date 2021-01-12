/*************************************
 * this keyword
 */

//  console.log(this);

var john={
    name:'John',
    yearOfBirth:1999,
    calculateAge:function(){
        console.log(this);
        console.log(2020-this.yearOfBirth);

        // function innerFunction(){
        //     console.log(this);
        // }
        // innerFunction();
    }
}

john.calculateAge();

var mike={
    name:'Mike',
    yearOfBirth:1984
};

mike.calculateAge = john.calculateAge;    //function borrowing
mike.calculateAge();