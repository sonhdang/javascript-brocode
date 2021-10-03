
/* Documet is referring to our Document Object Model (DOM). Basically, when a webpage is loaded, our browser creates a DOM which is a representation of an HTML document. By using the keyword 'document', we are making a reference to our HTML document. */

document.getElementById("myButton").onclick = function(){
    var myName = document.getElementById("myText").value;
    console.log("Hello", myName);
}