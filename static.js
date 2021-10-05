/* static: a method or property that belongs to a class and not
any object */

class Car{

    static numberOfCars = 0;

    static beginRace(){
        console.log("The race has begun!");
    }

    constructor(model){
        this.model = model;
        Car.numberOfCars += 1;
    }
}

let car1 = new Car("Mustang");
let car2 = new Car("Tesla");
let car3 = new Car("Honda");

console.log(Car.numberOfCars);
Car.beginRace();
car1.beginRace(); // this will generate an error

/* A typical example of static properties and functions */
Math.PI;
Math.round(3.13);