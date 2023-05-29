/*
    - javaScript classes are templates for javaScript objects. So a javaScript class is not an object. It is a template for JavaScript objects.
    - class Syntax:
                class ClassName{
                    constructor(){ ... }
                }
*/

/* 
    - The example creates a class named "Car".
    - The class has two initial properties: "name" and "year".
*/
class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    };
  };

/* 
    - Using a Class: When you have a class, you can use the class to create objects:
*/
const myCar1 = new Car("Ford", 2014);
const myCar2 = new Car("Audi", 2019);

console.log(myCar1);
console.log(myCar1.name);

/* 
    - set and get
*/