/*************************
 * understand global context and execution stack
 */

var name='Bob';                 //global context

function first(){               //global context
    var a='Hello!';
    second();
    var x = a + name;
    console.log(x);
}

function second(){              //global context
    var z='Hi!';
    var x = z + name;
    console.log(x);
}

first();                        //global context