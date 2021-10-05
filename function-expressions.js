/* function expression: a function can also be defined using
an expression. Function expression can be stored in a variable.
The variable can be used as a function. They can be invoked by
adding ()
    - Useful as closures
    - Used in IIFE (functions that runs as soon as its defined)
    - Can be passed as arguments to other functions */

let greeting1 = function(){console.log("Hello")}
let greeting2 = function(){document.getElementById("myH1").innerHTML = "Hello!"}

function output(func){
    func()
}

// behaves diffrently depending on which function is passed in
output(greeting2)