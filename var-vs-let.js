// "JavaScript standard meant to ensure the interoperability
// of Web pages across different web browers"

// let = declare variables with a block scoped {}
// var = declare variables with a function scoped ()

// The variable 'i' will not be accessible outside of this
// block of code
for(let i = 1; i <= 3; i++){
    console.log(i)
}

console.log(i) // This will cause an error "i is not defined"

// This variable 'i' will be accessible throughout the entire
// program because we have declared it with the keyword 'var'
// unless we are inside a function
// for(var i = 1; i <= 3; i++){
//     console.log(i)
// }

// console.log(i)

function doSomething(){
    for(var i = 1; i <= 3; i++){
        console.log(i)
    }
}
doSomething();
console.log(i); // This will cause an error "i is not defined"
// This is because the keyword var limit the scope of the
// variable 'i' to only the function if it is inside one.

// We should use 'let' instead of 'var' because when we use
// 'var' unintentionally, we might override a variable when
// we don't intend to