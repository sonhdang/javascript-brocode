
/* Functions has access to any variables outside of the functions themselves */

function sayHello(){
    console.log("Hello", myName);
};

var myName = "Son";

sayHello();

function myAge(age){
    console.log("My age is", age);
};

myAge(23);

function toCelsius(f){
    return (f-32) * (5/9)
};

console.log("My temp in C is", toCelsius(37.7), "degree");