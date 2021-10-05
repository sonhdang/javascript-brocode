/* closures is a function with preserved data. 
    - It gives you access to an outer functions scope, from an inner function.
    - State of variables in outer scope are "saved".
    - Variables in outer scope are considered "private" */

// First approach
let points1 = 0;

let score1 = function(){
    points1 += 1;
    return points1;
}

console.log(score1());
console.log(score1());
console.log(score1());
/* The problem with this approach is that 'points1' is a global variable
Everyone has access to 'points1' and can tamper with 'points1 points1 += 100; */
// Second approach
let score2 = function(){
    let points2 = 0;
    return points2 + 1;
}
console.log(score2());
console.log(score2());
console.log(score2());
/* The variable 'points2' is no longer accessible to anyone outsid the scope o
the function. Howevere, the state of the point is set to 0 every time the 
function is called and does not keep track of the number of 'points2' */

// Correct approach: closure - a function with preserved data
let score3 = function(){
    let points3 = 0;
    return function(){
        points3 += 1;
        return points3;
    }
}();
console.log(score3());
console.log(score3());
console.log(score3());