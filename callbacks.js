/* callback is a function passed as an argument to another
function; allows a function to invoke another function */

let message;

function displayConsole(output){
    console.log(output);
}

function displayDOM(output){
    document.getElementById("myH1").innerHTML = output;
}

function setMessage(text, callBack){
    message = text;
    callBack(message);
}

setMessage("Son Dang", displayDOM);