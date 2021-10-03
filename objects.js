// object = a container for properties/methods
// property = values/variables that describe what an object has
// methods = functions that describe what an object do

var human1 = {
    name : "Son",
    age : 23,

    jobSearch : function(){
        console.log("Son is looking for jobs")
    },

    learnCoding : function(){
        console.log("Son is learning to code in Javascript")
    },
    sleep : function(){
        console.log("Son is dreaming")
    }
};

/* There are two ways to access an object property: dot (.) notation or bracket ([]) notation */

human1.name      // dot notation
human1['age']    // bracket notation

console.log(human1.name);
console.log(human1.age);
human1.jobSearch();
human1.learnCoding();
human1.sleep();