/**********************************************
 * Classes and Subclasses
 */

 //ES5
 var Person=function(name,yearOfBirth,job){
    this.name=name;
    this.yearOfBirth=yearOfBirth;
    this.job=job;
}

Person.prototype.calcAge=function(){
    var age=new Date().getFullYear()-this.yearOfBirth;
    console.log(age);
}

var Athlete5=function(name,yearOfBirth,job,olympicGames,medals){
    Person.call(this,name,yearOfBirth,job);
    this.olympicGames=olympicGames;
    this.medals=medals;
}

Athlete5.prototype=Object.create(Person.prototype);

Athlete5.prototype.wonMedal=function(){
    this.medals++;
    console.log(this.medals);
}

var johnAthlete5=new Athlete5('John',1999,'swimmer',3,10);

johnAthlete5.calcAge();
johnAthlete5.wonMedal();



//ES6
class Person6{
    constructor(name,yearOfBirth,job){
        this.name=name;
        this.yearOfBirth=yearOfBirth;
        this.job=job;
    }

    calcAge(){
       var age=new Date().getFullYear()-this.yearOfBirth;
       console.log(age);
    }

}

class Athlete6 extends Person6{
    constructor(name,yearOfBirth,job,olympicGames,medals){
        super(name,yearOfBirth,job);
        this.olympicGames=olympicGames;
        this.medals=medals;
    }
    wonMedal(){
        this.medals++;
        console.log(this.medals);
    }
}

const johnAthlete6=new Athlete6('John',1999,'swimmer',3,10);
johnAthlete6.wonMedal();
johnAthlete6.calcAge();
