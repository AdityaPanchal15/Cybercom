const student=[
    {name:'Aditya',yearOfBirth:1999},
    {name:'Dinesh',yearOfBirth:1995},
    {name:'Nikhil',yearOfBirth:2000},
    {name:'Harshil',yearOfBirth:1998}
]

console.log(student.sort(sortByYear));

function sortByYear(a,b){
    const yearOfBirth1=a.yearOfBirth;
    const yearOfBirth2=b.yearOfBirth;
    // console.log(yearOfBirth1);
    // console.log(yearOfBirth2);

    let c=0;

    if(yearOfBirth1>yearOfBirth2){
        c=1;
    }else{
        c=-1;
    }
    // console.log(c);
    return c;
}