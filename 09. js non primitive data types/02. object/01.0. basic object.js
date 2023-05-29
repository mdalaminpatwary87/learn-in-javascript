/*====================================================================================================================================================
JavaScript Objects => In JavaScript, objects are king. If you understand objects, you understand JavaScript. So In JavaScript, almost "everything" is an object.
                    Booleans can be objects (if defined with the new keyword)
                    Numbers can be objects (if defined with the new keyword)
                    Strings can be objects (if defined with the new keyword)
                    Dates are always objects
                    Maths are always objects
                    Regular expressions are always objects
                    Arrays are always objects
                    Functions are always objects
                    Objects are always objects
Note:
                    All JavaScript values, except primitives, are objects.

JavaScript Primitives => 
                    01. A primitive value is a value that has no properties or methods. 3.14 is a primitive value. 
                    02. A primitive data type is data that has a primitive value.
                    03. JavaScript defines 7 types of primitive data types.
                                                                        string
                                                                        number
                                                                        boolean
                                                                        null
                                                                        undefined
                                                                        symbol
                                                                        bigint
Immutable => 
                    01. Primitive values are immutable (they are hardcoded and cannot be changed.
                    02. if x = 3.14, you can change the value of x, but you cannot change the value of 3.14.
                    Value	            Type	            Comment
                    "Hello"	            string	            "Hello" is always "Hello"
                    3.14	            number	            3.14 is always 3.14
                    true	            boolean	            true is always true
                    false	            boolean	            false is always false
                    null	            null (object)	    null is always null
                    undefined	        undefined	        undefined is always undefined

                    01. JavaScript objects are written with curly braces {}. 
                    02. Object properties are written as name:value pairs, separated by commas. 
                    03. objects can contain many values. 
                    04. The values are written as name:value pairs (name and value separated by a colon).
                    05. Try to declare objects with the const keyword.
                    06. A JavaScript object is a collection of named values, alled properties and methods.

Real Life Objects, Properties, and Methods =>
                    01. In real life, a car is an object.
                    02. A car has properties like weight and color, and methods like start and stop.
                    =================================================================
                    Object	                Properties	                Methods
                    Car                     car.name = Fiat             car.start()

                                            car.model = 500             car.drive()

                                            car.weight = 850kg          car.brake()

                                            car.color = white           car.stop()	
                    =================================================================== 
                    
Note:                                          
                    01. All cars have the same properties, but the property values differ from car to car.
                    02. All cars have the same methods, but the methods are performed at different times.
====================================================================================================================================================*/
/*====================================================================================================================================================
Creating a JavaScript Object => There are different ways to create new objects.
                    01. Create a single object, using an object literal. => 
                                                                            01. This is the easiest way to create a JavaScript Object.
                                                                            02. Using an object literal, you both define and create an object in one statement.
                                                                            03. An object literal is a list of name:value pairs (like age:50) inside curly braces {}.
                    02. Create a single object, with the keyword new.
                                                                            01. The examples above do exactly the same.
                                                                            02. But there is no need to use new Object().
                                                                            03. For readability, simplicity and execution speed, use the object literal method.
                    03. Define an object constructor, and then create objects of the constructed type.
                    04. Create an object using Object.create().
====================================================================================================================================================*/
// Create Object. This is a empty obj. 
var person = {}
console.log(person)

// creates an empty JavaScript object, and then adds 4 properties.
var person = {}
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";
console.log(person)

// Another way to Create Object. Here 4 properties: firstName, lastName, age, and eyeColor.
var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"}; 
console.log(person)

// An object can be write multiple lines.
var person = {
    firstName:"John", 
    lastName:"Doe", 
    age:50, 
    eyeColor:"blue" // no need comas last properties
}; 
console.log(person)

// object literal & Using the JavaScript Keyword new.
var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
console.log(person) // this is called object literal 

var person = new Object({firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"}) 
console.log(person) // Using the JavaScript Keyword new

var person = new Object();
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";
console.log(person)

/*====================================================================================================================================================
Object Properties => 
The name : values pairs in JavaScript objects are called properties.
                        ==========================================
                        Property	            Property Value
                        firstName	  :          John
                        lastName	  :          Doe
                        age	50        :
                        eyeColor	  :         blue
                        ===========================================

Accessing Object Properties => We can access object properties in two ways.
                    01. objectName.propertyName
                    02. objectName["propertyName"]
====================================================================================================================================================*/
var person = {
    firstName:"John", 
    lastName:"Doe", 
    age:50, 
    eyeColor:"blue"
}; 
console.log(person.firstName)

var person = {
    firstName:"John", 
    lastName:"Doe", 
    age:50, 
    eyeColor:"blue"
}; 
console.log(person['firstName'])

/*====================================================================================================================================================
Object Methods => 
Objects can also have methods. Methods are actions that can be performed on objects. Methods are stored in properties as function definitions.
                        ===================================================================================
                        Property	            Property Value
                        firstName	  :          John
                        lastName	  :          Doe
                        age	          :          50
                        eyeColor	  :         blue
                        funllName     :         function() {return this.firstName + " " + this.lastName;}
                        ===================================================================================
                        A method is a function stored as a property.

Accessing Object Methods => We access an object method with the following syntax.
                    objectName.methodName()
====================================================================================================================================================*/
var person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    } // this are js keyword. In a function definition, this refers to the "owner" of the function. this is the person object that "owns" the fullName function. So, this refers to the person object. this.firstName means the firstName property of this. // this.firstName means the firstName property of person.
  };
var name = person.fullName();
console.log(name);

// If we access a method without the () parentheses, it will return the function definition.
var name = person.fullName; 
console.log(name);

var cars = {
    name : 'Fiat',
    model : 500,
    weight : '850 kg',
    color : 'white',
    start: function(){
        console.log('Car has started.')
    },
    drive: function(){
        console.log('Car has driving.')
    }
};
console.log(cars.weight);
cars.start();
cars.drive();

/*====================================================================================================================================================
Do Not Declare Strings, Numbers, and Booleans as Objects =>
                    01. When a JavaScript variable is declared with the keyword "new", the variable is created as an object.
                    02. Avoid String, Number, and Boolean objects. They complicate your code and slow down execution speed
                    03. Always write Strings, Numbers, and Booleans as a literal syntax. 
====================================================================================================================================================*/
var x = 5;
console.log(x + ' ' + typeof x)

x = new Number(5);                // Declares x as a Number object
console.log(x + ' ' + typeof x)

var x = 'Hello World';
console.log(x + ' ' + typeof x)

x = new String('Hello World');     // Declares x as a String object
console.log(x + ' ' + typeof x)

var x = true;
console.log(x + ' ' + typeof x)

var x = new Boolean(true);       // Declares z as a Boolean object
console.log(x + ' ' + typeof x)

/*====================================================================================================================================================
JavaScript Objects are Mutable => Objects are mutable: They are addressed by reference, not by value. The object x is not a copy of person. It is person. Both x and person are the same object. Any changes to x will also change person, because x and person are the same object.
====================================================================================================================================================*/
// If person is an object, the following statement will not create a copy of person:
var person = {
    firstName:"John",
    lastName:"Doe",
    age:50, 
    eyeColor:"blue"
  }
var x = person;
x.age = 10;      // // Will change both x.age and person.age. Will not create a copy of person.
console.log(person);
console.log(x)