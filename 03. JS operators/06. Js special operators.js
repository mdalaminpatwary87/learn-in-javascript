/*====================================================================================================================================================
Ternary operator => 
                 - Ternary operator is special operators in javascript.
                 - The ternary operator (?:) is a shorthand way to write an if-else statement in a single line. 
                 - It takes three operands: a condition, a value to return if the condition is true, and a value to return if the condition is false.
                 - A condition followed by a question mark (?), then an expression to execute if the condition is truthy followed by a colon (:), and finally the expression to execute if the condition is falsy.
                 - Syntax:
                          condition ? exprIfTrue : exprIfFalse
                          Like:
                          variablename = (condition) ? value1: value2 
======================================================================================================================================================*/
// find even and odd number using js if..else conditional statements
var x = 12;
if (x % 2 === 0){
    console.log(x + ' is Even Number.')
}else{
    console.log(x + ' is Odd Number.')
}

// find even and odd number using js ternary operator
var x = 12;
var message = (x % 2 === 0) ? x + ' is Even Number.' : x + ' is Odd Number.';
console.log(message);

// This code checks if the age variable is greater than or equal to 18. If it is, the value "You are an adult" is returned, otherwise the value "You are not an adult" is returned.
var age = 20;
var message = age >= 18 ? "You are an adult" : "You are not an adult";
console.log(message);

/*====================================================================================================================================================
Delete operator =>
                - In JavaScript, the delete operator is used to delete an object's property, or an element from an array, or to delete a declared variable.
======================================================================================================================================================*/
// Here is an example that demonstrates how to use the delete operator to remove an element from an array:
// In this example, the delete operator is used to remove the element with index 2 from the numbers array. After the delete operation, the element is removed and the array's length is still the same, but the deleted element is now set to undefined.
var numbers = [1, 2, 3, 4, 5];
delete numbers[2];     // delete the element with index 2 (the value 3)
console.log(numbers);  // [1, 2, undefined, 4, 5]

// Here is an example that demonstrates how to use the delete operator to remove a property from an object:
// In this example, the delete operator is used to remove the address property from the person object. After the delete operation, the address property is removed from the object.
var person = {
  name: "John",
  age: 30,
  address: "123 Main St."
};
delete person.address; // delete the address property
console.log(person);   // {name: "John", age: 30}

// It's important to note that the delete operator only removes a property from an object or an element from an array. It does not remove the variable itself. If you want to remove a variable, you can set its value to undefined or null.
var fruits = ["apple", "banana", "orange"];
fruits = undefined;
console.log(fruits);

/*====================================================================================================================================================
    Operator	     Description
    typeof	         Returns the type of a variable
    instanceof	     Returns true if an object is an instanceof an object type

In JavaScript there are 5 different data types that can contain values =>
                                                                        string
                                                                        number
                                                                        boolean
                                                                        object
                                                                        function
There are 6 types of objects => 
                                                                        Object
                                                                        Date
                                                                        Array
                                                                        String
                                                                        Number
                                                                        Boolean
And 2 data types that cannot contain values => 
                                                                        null
                                                                        undefined
====================================================================================================================================================*/
/*===================================================================================================================================================
Typeof Operator => We can use the JavaScript typeof operator to find the type of a JavaScript variable. The typeof operator returns the type of a variable or an expression.

typeof "John"                 // Returns "string"
typeof 3.14                   // Returns "number"
typeof NaN                    // Returns "number"
typeof false                  // Returns "boolean"
typeof [1,2,3,4]              // Returns "object"
typeof {name:'John', age:34}  // Returns "object"
typeof new Date()             // Returns "object"
typeof function () {}         // Returns "function"
typeof myCar                  // Returns "undefined" *
typeof null                   // Returns "object"

Please observe:
    The data type of NaN is number
    The data type of an array is object
    The data type of a date is object
    The data type of null is object
    The data type of an undefined variable is undefined *
    The data type of a variable that has not been assigned a value is also undefined *
====================================================================================================================================================*/
var a = 10;
console.log(typeof a)

var a = 10.10;
console.log(typeof a)

var a = 'Hello World';
console.log(typeof a)

var a = true;
console.log(typeof a)

var a =   [1,2,3,4] 
console.log(typeof a)

var a =  {name:'john', age:34}
console.log(typeof a)

/*====================================================================================================================================================
Primitive Data => A primitive data value is a single simple data value with no additional properties and methods.
The typeof operator can return one of these primitive types =>
                                                              string
                                                              number
                                                              boolean
                                                              undefined
typeof "John"              // Returns "string"
typeof 3.14                // Returns "number"
typeof true                // Returns "boolean"
typeof false               // Returns "boolean"
typeof x                   // Returns "undefined" (if x has no value)
======================================================================================================================================================*/
/*====================================================================================================================================================
Complex Data =>The typeof operator can return one of two complex types 
                                                                      function
                                                                      object
The typeof operator returns "object" for objects, arrays, and null.
The typeof operator does not return "object" for functions.

Example:
typeof {name:'John', age:34} // Returns "object"
typeof [1,2,3,4]             // Returns "object" (not "array", see note below)
typeof null                  // Returns "object"
typeof function myFunc(){}   // Returns "function"
======================================================================================================================================================*/
/*====================================================================================================================================================
The Data Type of typeof =>
The typeofoperator is not a variable. It is an operator. Operators ( + - * / ) do not have any data type.
But, the typeof operator always returns a string (containing the type of the operand).
======================================================================================================================================================*/
var a =  {name:'john', age:34}
console.log(typeof a)
console.log( typeof typeof a) // return string 

/*====================================================================================================================================================
constructor Property => The constructor property returns the constructor function for all JavaScript variables.

Example:
"John".constructor                // Returns function String()  
(3.14).constructor                // Returns function Number()  
false.constructor                 // Returns function Boolean() 
[1,2,3,4].constructor             // Returns function Array()   
{name:'John',age:34}.constructor  // Returns function Object() 
new Date().constructor            // Returns function Date()    
function () {}.constructor        // Returns function Function()
======================================================================================================================================================*/
// You can check the constructor property to find out if an object is an Array (contains the word "Array"):
function isArray(myArray) {
  return myArray.constructor.toString().indexOf("Array") > -1;
}
console.log(isArray([1,2,3]))

// Or even simpler, you can check if the object is an Array function:
function isArray(myArray) {
  return myArray.constructor === Array;
}
console.log(isArray([1,2,3]))

// You can check the constructor property to find out if an object is a Date (contains the word "Date")
var myDate = new Date();
function isDate(myDate) {
  return myDate.constructor.toString().indexOf("Date") > -1;
}
console.log(isDate(myDate))

// Or even simpler, you can check if the object is a Date function:
var myDate = new Date();
function isDate(myDate) {
  return myDate.constructor === Date;
}
console.log(isDate(myDate))

/*====================================================================================================================================================
Undefined => In JavaScript, a variable without a value, has the value undefined. The type is also undefined.
======================================================================================================================================================*/
var car; // Value is undefined, type is undefined
console.log(car)
console.log(typeof car)

// Any variable can be emptied, by setting the value to undefined. The type will also be undefined.
var car = undefined; // Value is undefined, type is undefined
console.log(car)
console.log(typeof car)

/*====================================================================================================================================================
Empty Values => An empty value has nothing to do with undefined. An empty string has both a legal value and a type.
======================================================================================================================================================*/
var car = ' ';   // The value is "", the typeof is "string"
console.log(car)
console.log(typeof car)

/*====================================================================================================================================================
Null => 
01. In JavaScript null is "nothing". It is supposed to be something that doesn't exist.
02. Unfortunately, in JavaScript, the data type of null is an object.
03. You can consider it a bug in JavaScript that typeof null is an object. It should be null.
======================================================================================================================================================*/
// You can consider it a bug in JavaScript that typeof null is an object. It should be null.
var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
person = null;  // Now value is null, but type is still an object
console.log(person)
console.log(typeof person)

// You can also empty an object by setting it to undefined:
var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
person = undefined;  // Now both value and type is undefined
console.log(person)
console.log(typeof person)

/*====================================================================================================================================================
Difference Between Undefined and Null => undefined and null are equal in value but different in type:

typeof undefined           // undefined
typeof null                // object

null === undefined         // false
null == undefined          // true
======================================================================================================================================================*/

/*====================================================================================================================================================
 instanceof => The JavaScript instanceof operator is used to check the type of an object at the run time. It returns a boolean value(true or false). If the returned value is true, then it indicates that the object is an instance of a particular class and if the returned value is false then it is not.
        Syntax =>
                var myVar = objectName instanceof objectType
                    01. objectName is the object to test. Signifies the name of the object.
                    02. objectType are constructor is a function to test against.

======================================================================================================================================================*/
var fruits = ["Apple", "Mango", "Banana"];
console.log(fruits instanceof Array);
console.log(fruits instanceof Object);
console.log(fruits instanceof Number);
console.log(fruits instanceof String);

function Person(name) {
    this.name = name;
  }
let p1 = new Person('John');
console.log(p1 instanceof Person); 


