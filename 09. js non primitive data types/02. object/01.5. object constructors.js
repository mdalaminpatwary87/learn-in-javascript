/*====================================================================================================================================================
JavaScript Object Constructors function

Notes => It is considered good practice to name constructor functions with an upper-case first letter.
About this => In a constructor function this does not have a value. It is a substitute for the new object. The value of this will become the new object when a new object is created.

Object Types (Blueprints) (Classes) =>
                            Sometimes we need a "blueprint" for creating many objects of the same "type".
                            The way to create an "object type", is to use an object constructor function.
                            In the example below, function Person() is an object constructor function.
                            Objects of the same type are created by calling the constructor function with the new keyword.
======================================================================================================================================================*/
// Constructor function for Person objects
function Person(first, last, age, eye) { //বড় হাতের প্রথম অক্ষর দিয়ে কন্সট্রাক্টর ফাংশনের নাম দেওয়া ভাল অনুশীলন বলে মনে করা হয়।
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    this.fullName = function(){
        return this.firstName + ' ' + this.lastName;
    }
  }
// Create a Person object
var hridoy = new Person("AHmd", "HriDoy", 22, "blue");
var rahim = new Person("Mr.", "Rahim", 35, "green");
var karim = new Person("Dr.", "Karim", 40, "black");
console.log(hridoy);
console.log(rahim);
console.log(karim);

console.log(hridoy.fullName());
console.log(rahim.fullName());
console.log(karim.fullName());

/*====================================================================================================================================================
Adding a Property to an Object => Adding a new property to an existing object is easy.
======================================================================================================================================================*/
function Person(first, last, age, eye) { 
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    this.fullName = function(){
        return this.firstName + ' ' + this.lastName;
    }
  }
var hridoy = new Person("AHmd", "HriDoy", 22, "blue");
// Add nationality Property.
hridoy.nationality = "English";
console.log(hridoy) // The property will be added to hridoy. Not to others (Not to any other person objects).

var rahim = new Person("Mr.", "Rahim", 35, "green");
var karim = new Person("Dr.", "Karim", 40, "black");
console.log(rahim); // can not adding this properties 
console.log(karim); // can not adding this properties 

/*====================================================================================================================================================
Adding a Method to an Object => Adding a new method to an existing object is easy.
======================================================================================================================================================*/
function Person(first, last, age, eye) { 
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }
var hridoy = new Person("AHmd", "HriDoy", 22, "blue");
// Add a name method to first object.
hridoy.fullName = function() {
    return this.firstName + " " + this.lastName;
  };
console.log(hridoy);          
console.log(hridoy.fullName()); // The method will be added to hridoy. Not to others. (Not to any other person objects).

var rahim = new Person("Mr.", "Rahim", 35, "green");
var karim = new Person("Dr.", "Karim", 40, "black");
console.log(rahim); // can not adding this method
console.log(karim); // can not adding this method 

/*====================================================================================================================================================
Adding a Property to a Constructor => You cannot add a new property to an object constructor the same way you add a new property to an existing object:
======================================================================================================================================================*/
function Person(first, last, age, eye) { 
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}
Person.nationality = "English"; // cannot add a new property to an object constructor.
console.log(Person);

// To add a new property to a constructor, you must add it to the constructor function.
function Person(first, last, age, eye) { 
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    this.nationality = "English";  // This way object properties can have default values.
}
// Create 2 Person objects
var myFather = new Person("John", "Doe", 50, "blue");
var myMother = new Person("Sally", "Rally", 48, "green");
console.log(myFather);
console.log(myMother);
console.log('My father Nationality'+' ' + myFather.nationality);
console.log('My Mother Nationality'+' ' + myMother.nationality);

/*====================================================================================================================================================
Adding a Method to a Constructor => Your constructor function can also define methods.
======================================================================================================================================================*/
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    this.fullName = function() {
      return this.firstName + " " + this.lastName
    };
  }
// Create a Person object
var myFather = new Person("John", "Doe", 50, "blue");
console.log(`My Father Name is ${myFather.fullName()}.`)

// You cannot add a new method to an object constructor the same way you add a new method to an existing object. Adding methods to an object constructor must be done inside the constructor function.
function Person(firstName,lastName,age,eyeColor) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.eyeColor = eyeColor;
    this.changeName = function (name) {
      this.lastName = name;
    }
}
// Create a Person object
var myMother = new Person("Sally","Rally",48,"green");
// Change last name
myMother.changeName("Doe"); // The changeName() function assigns the value of name to the person's lastName property.JavaScript knows which person you are talking about by "substituting" this with myMother.
console.log("My mother's last name is " + myMother.lastName);

/*====================================================================================================================================================
Built-in JavaScript Constructors => JavaScript has built-in constructors for native objects:
const x1 = new String();   // A new String object
const x2 = new Number();   // A new Number object
const x3 = new Boolean();  // A new Boolean object
const x4 = new Object();   // A new Object object
const x5 = new Array();    // A new Array object
const x6 = new RegExp();   // A new RegExp object
const x7 = new Function(); // A new Function object
const x8 = new Date();     // A new Date object

The Math() object is not in the list. Math is a global object. The new keyword cannot be used on Math.
======================================================================================================================================================*/
/*====================================================================================================================================================
JavaScript has object versions of the primitive data types String, Number, and Boolean. But there is no reason to create complex objects. Primitive values are much faster:
    Use string literals "" instead of new String().
    Use number literals 50 instead of new Number().
    Use boolean literals true / false instead of new Boolean().
    Use object literals {} instead of new Object().
    Use array literals [] instead of new Array().
    Use pattern literals /()/ instead of new RegExp().
    Use function expressions () {} instead of new Function()

let x1 = "";             // new primitive string
let x2 = 0;              // new primitive number
let x3 = false;          // new primitive boolean

const x4 = {};           // new Object object
const x5 = [];           // new Array object
const x6 = /()/          // new RegExp object
const x7 = function(){}; // new function
======================================================================================================================================================*/
/*====================================================================================================================================================
String Objects =>
    Normally, strings are created as primitives: firstName = "John"
    But strings can also be created as objects using the new keyword:
    firstName = new String("John")

Number Objects =>
    Normally, numbers are created as primitives: x = 30
    But numbers can also be created as objects using the new keyword:
    x = new Number(30)

Boolean Objects => 
    Normally, booleans are created as primitives: x = false
    But booleans can also be created as objects using the new keyword:
    x = new Boolean(false)
======================================================================================================================================================*/
