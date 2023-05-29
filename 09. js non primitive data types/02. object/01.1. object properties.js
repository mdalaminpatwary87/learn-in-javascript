/*====================================================================================================================================================
JavaScript Object Properties => 
                        01. Properties are the most important part of any JavaScript object.
                        02. Properties are the values associated with a JavaScript object.
                        03. A JavaScript object is a collection of unordered properties.
                        04. Properties can usually be changed, added, and deleted, but some are read only.
====================================================================================================================================================*/
/*====================================================================================================================================================
Accessing JavaScript Properties => The syntax for accessing the property of an object is:
                        01. objectName.property      // person.age
                        02. objectName["property"]   // person["age"]
                        03. objectName[expression]   // x = "age"; person[x] The expression must evaluate to a property name.
====================================================================================================================================================*/
var person = {
    firstname: "John",
    lastname: "Doe",
    age: 50,
    eyecolor: "blue"
  };
console.log(person.age);     
console.log(person.firstname + " is " + person.age + " years old.");  // rules no 1
console.log(person['age']);   
console.log(person["firstname"] + " is " + person["age"] + " years old."); // rules no 2
var x = 'age';
console.log(person[x]);  // rules no 3

// JavaScript for...in Loop
var person = {
    firstname: "John",
    lastname: "Doe",
    age: 50,
    eyecolor: "blue"
  };
for (var x in person){
    console.log(x)
}

var person = {
    firstname: "John",
    lastname: "Doe",
    age: 50,
    eyecolor: "blue"
  };
for (var x in person){
    console.log(person[x])
}

/*====================================================================================================================================================
Adding New Properties => 
                        01. You can add new properties to an existing object by simply giving it a value.
                        02. Assume that the person object already exists - you can then give it new properties
====================================================================================================================================================*/
var person = {
    firstname: "John",
    lastname: "Doe",
    age: 50,
    eyecolor: "blue"
  };
person.nationality = "English";
console.log(person)

var person = {
    firstname: "John",
    lastname: "Doe",
    age: 50,
    eyecolor: "blue"
  };
person.firstname = "Don"; //  person object already exists - you can then give it new properties.
console.log(person)

/*====================================================================================================================================================
Deleting Properties => 
                    01. The delete keyword deletes a property from an object
                    02. The delete keyword deletes both the value of the property and the property itself.
                    03. The delete operator is designed to be used on object properties. It has no effect on variables or functions.
                    04. The delete operator should not be used on predefined JavaScript object properties. It can crash your application.
====================================================================================================================================================*/
var person = {
    firstname: "John",
    lastname: "Doe",
    age: 50,
    eyecolor: "blue"
  };
delete person.age;
console.log(person)

// or delete person["age"]
var person = {
    firstname: "John",
    lastname: "Doe",
    age: 50,
    eyecolor: "blue"
  };
delete person['age'];
console.log(person)

/*====================================================================================================================================================
Nested Objects => Values in an object can be another object.
====================================================================================================================================================*/
var myObj = {
    name:"John",
    age:30,
    cars: {
      car1:"Ford",
      car2:"BMW",
      car3:"Fiat"
    }
  }
console.log(myObj)
console.log(myObj.cars) 
console.log(myObj.cars.car1)

console.log(myObj)
console.log(myObj['cars']) 
console.log(myObj['cars']['car1'])

// Or another 
var p1 = "cars";
var p2 = "car2";
console.log(myObj[p1][p2])

/*====================================================================================================================================================
Nested Arrays and Objects => Values in objects can be arrays, and values in arrays can be objects:
====================================================================================================================================================*/
var myObj = {
    name: "John",
    age: 30,
    cars: [
      {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
      {name:"BMW", models:["320", "X3", "X5"]},
      {name:"Fiat", models:["500", "Panda"]}
    ]
  }
console.log(myObj)

// To access arrays inside arrays, use a for-in loop for each array:
var myObj = {
    name: "John",
    age: 30,
    cars: [
      {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
      {name:"BMW", models:["320", "X3", "X5"]},
      {name:"Fiat", models:["500", "Panda"]}
    ]
  }
/*
for (var i in myObj.cars) {
    console.log(i)
  }
  
for (var i in myObj.cars) {
    console.log(myObj.cars[i])
  }

for (var i in myObj.cars) {
    console.log(myObj.cars[i].name)
  } 
*/
for (var i in myObj.cars) {
    console.log(myObj.cars[i].name);
    for(var j in myObj.cars[i].models){
        console.log(myObj.cars[i].models[j]);
    }
  }

/*====================================================================================================================================================
Property Attributes => 
                        All properties have a name. In addition they also have a value.
                        The value is one of the property's attributes.
                        Other attributes are: enumerable, configurable, and writable.
                        These attributes define how the property can be accessed (is it readable?, is it writable?)
                        In JavaScript, all attributes can be read, but only the value attribute can be changed (and only if the property is writable).
                        ( ECMAScript 5 has methods for both getting and setting all property attributes)
====================================================================================================================================================*/
/*====================================================================================================================================================
Prototype Properties =>
                    JavaScript objects inherit the properties of their prototype.
                    The delete keyword does not delete inherited properties, but if you delete a prototype property, it will affect all objects inherited from the prototype.
====================================================================================================================================================*/
// Run this code chrome browser to understand prototype properties.
var a = 'Bangladesh';      
console.log(a);   // return normally string 

// we know string is primitive data type that's why string don't have any properties & method. But but we alreday use string method & properties. How is possible ? yes is't possible for prototype
var a = 'Bangladesh';      
console.log(a.toUpperCase());  // return BANGLADESH. But how?

// see the prototype Properties
var a = new String('Bangladesh');
console.dir(a);