/* Arrow functions = shortcut for a function expression */

// EXAMPLE 1
let hello;

// Function expression
hello = function(){
    return "Hello World!";
}
console.log(hello());

// Arrow function
hello = () => "Hello World!";
console.log(hello());

// EXAMPLE 2: with argument
let yo = "Yo";

// Function expression
hello = function(x){
    return x + " " + "Hello World!";
}
console.log(hello(yo));

// Arrow function
hello = (x) => x + " " + "Hello World!";
console.log(hello(yo));

// EXAMPLE 3: multiple-line body

// Function expression
hello = function(){
    console.log("Hello");
    console.log("World");
}
hello()

// Arrow function
hello = () => {
    console.log("Hello");
    console.log("World");
}
hello()

/* A typical use case for arrow function is used in conjunction
with map(), reduce(), filter() */

// map()
let storeUSD = [5, 6, 7, 8, 9];
let storeVND;

storeVND = storeUSD.map(value => value * 22755)
console.log(storeVND);

// filter()
let students = [16, 17, 18, 19, 20];
let adultStudents;

adultStudents = students.filter(age => age >= 18)
console.log(adultStudents);

// reduce()
let letters = ["D", "A", "N", "G"];
let word;

word = letters.reduce((total, nextLetter) => total + nextLetter);
console.log(word);