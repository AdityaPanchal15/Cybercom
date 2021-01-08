/************************************
 * Basic operators
 */
var year,marks1,marks2;
marks1=28;
marks2=45;
year=2020;

//Math operators
console.log(year);
console.log(year+1);
console.log(year*2);
console.log(year/2);

//Logical operators
var marks=marks1>marks2;
console.log(marks);

//typeof operator
console.log(typeof year);
console.log(typeof marks);
console.log(typeof 'Hii,I am Adi');
var x;
console.log(typeof x);


/*******************************************
 * Operator precedance
 */
var now,yearAdi,fullAge;
now=2020;
yearAdi=1999;
fullAge=21;

//multiple operators
var isFullAge=now-yearAdi>=fullAge;  //true
console.log(isFullAge);

//Grouping 
var ageAdi=now-yearAdi;
var ageDinesh=23;
var average=(ageAdi + ageDinesh) / 2;
console.log(average);

//multiple assignments
var x = y = (2 + 6) * 5 - 4 ;
console.log(x,y);

//other operators
x*=2;
console.log(x);
x++;
console.log(x);
console.log(++x);
x=5;
x=x<<2;//left shift with append 0 to right
console.log(x);