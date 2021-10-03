

var cars = ["Mustang", "Corvette", "Jaguar"];

console.log(cars[0]);
console.log(cars[1]);
console.log(cars)

// To append an element to an array, use 'push()'
cars.push("Tesla");
console.log(cars);

// To remover the last element of an array, use 'pop()'
cars.pop();
console.log(cars);

// Every array has a property 'length'
var numberOfCars = cars.length;
console.log(numberOfCars);

// To sort an array alphabetically, use built-in method 'sort()'
sortedCars = cars.sort()
console.log(sortedCars)

// To reverse sort an array, use 'reverse()'
reversedCars = cars.reverse()
console.log(reversedCars)