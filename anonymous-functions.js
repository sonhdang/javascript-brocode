/* anonymous functions = function without a name. Often not
accessible after its initial creation. Benefits: does not 
clutter global namespace, usable once, can be passed as arguments */

(function(){
    document.getElementById("myH1").innerHTML = "hey!"
})();

/* a typical example of when this functions is used is when
you want to pass in a function for setTimeout(function, ms) */

setTimeout(
    function(){document.getElementById("myH1").innerHTML = "sup?"}, 
    1000);
