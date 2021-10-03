
/* Note that when we accept user's input, we will take the user's input as a string by default */
var age = window.prompt("Enter your age");

console.log("Happy Birthday!");

/* Therefore, we have to convert the user's input into numbers */
age = Number(age)
age += 1;

console.log(age);

/* You can also convert a number back to a string using the built-in function 'String(num)' */
var myVar;
myVar = String(3.14)

console.log(typeof myVar);
console.log(myVar);

/* You can also convert strings and numbers to boolean type. Note that: 
    - 0, empty string "", null, undefined and NaN will be converted to false
    - Everything else will be converted to true */