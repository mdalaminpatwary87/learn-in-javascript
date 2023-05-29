/*====================================================================================================================================================
JavaScript Object Prototypes => All JavaScript objects inherit properties and methods from a prototype.
======================================================================================================================================================*/
function Person(first, last, age, eyecolor) { // In the previous chapter we learned how to use an object constructor.
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
  }
var myFather = new Person("John", "Doe", 50, "blue");
var myMother = new Person("Sally", "Rally", 48, "green");
console.log(myFather);
console.log(myMother);

// We also learned that we can not add a new property to an existing object constructor:
function Person(first, last, age, eyecolor) {  
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
  }
Person.nationality = "English";
var myFather = new Person("John", "Doe", 50, "blue");
console.log(myFather.firstName + ' ' + myFather.lastName + ' ' + myFather.age + ' ' + myFather.eyeColor + ' ' + myFather.nationality); //nationality return undefined.

// Aslo know that to add a new property to a constructor, you must add it to the constructor function:
function Person(first, last, age, eyecolor) {  
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
    this.nationality = 'Bangladesh' // remember that, object properties can have default values. Access all others objects.
  }
var myFather = new Person("John", "Doe", 50, "blue");
var myMother = new Person("Sally", "Rally", 48, "green");
console.log(myFather.firstName + ' ' + myFather.lastName + ' ' + myFather.age + ' ' + myFather.eyeColor + ' ' + myFather.nationality); 
console.log(myMother.firstName + ' ' + myMother.lastName + ' ' + myMother.age + ' ' + myMother.eyeColor + ' ' + myMother.nationality); // aslo access nationality.

/*====================================================================================================================================================
Prototype Inheritance => All JavaScript objects inherit properties and methods from a prototype.
                01. Date objects inherit from Date.prototype
                02. Array objects inherit from Array.prototype
                03. Person objects inherit from Person.prototype
The Object.prototype is on the top of the prototype inheritance chain.
Date objects, Array objects, and Person objects inherit from Object.prototype.
======================================================================================================================================================*/
/*====================================================================================================================================================
Adding Properties and Methods to Objects => Sometimes you want to add new properties (or methods) to all existing objects of a given type.
Sometimes you want to add new properties (or methods) to an object constructor.
======================================================================================================================================================*/
/*====================================================================================================================================================
Using the prototype Property => The JavaScript prototype property allows you to add new properties to object constructors.
======================================================================================================================================================*/
function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
  }
Person.prototype.nationality = "English";
var myFather = new Person("John", "Doe", 50, "blue");
console.log(myFather.nationality);

// The JavaScript prototype property also allows you to add new methods to objects constructors:
function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
  }
Person.prototype.fullName = function() {
    return this.firstName + " " + this.lastName;
  };

var myFather = new Person("John", "Doe", 50, "blue");
console.log(myFather.fullName());
/*=================================================================Note===================================================================================
                                Only modify your own prototypes. Never modify the prototypes of standard JavaScript objects.
======================================================================================================================================================*/

