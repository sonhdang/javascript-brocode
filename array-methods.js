/* forEach() performs a functions for each element in an array */
let total = 0;
let cart = [5, 6, 7, 8, 9];

// This is a 'callback' function
function checkOut(element){
    total += element;
}

cart.forEach(checkOut);
console.log("Your total is: $" + total)

/* map() performs a function for each element in an array, then
stores the returned values in a new array */
let storeUSD = [5, 6, 7, 8, 9];

// This is also a 'callback' function
function toVND(value){
    value *= 22758.31;
    return value;
}

let storeVND = storeUSD.map(toVND);
console.log(storeUSD);
console.log(storeVND);

/* filter() returns the elements of an array that meets a
condition specified in a function */
let students = [16, 17, 18, 19, 20];

function checkAge(age){
    if(age >= 18){
        return age;
    }
}

let adultStudents = students.filter(checkAge);
console.log(adultStudents)  

/* reduce() reduces an array to a single value. The return value
of the callback function is the accumulated result; provided as
an argument in the next call to the callback function. There is
also reduceRight() which is identical to reduce(); except from
the right */
let letters = ["D", "A", "N", "G"];

function combineLetters(accumulator, value){
    return accumulator + value;
}

let word = letters.reduce(combineLetters);
console.log(word);