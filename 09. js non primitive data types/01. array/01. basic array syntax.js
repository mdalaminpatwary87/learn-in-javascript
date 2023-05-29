/*
    - an array is a special variable,which can hold more than one value.
    - javaScript arrays are written with square brackets[].Array items are separated by commas.
    - array indexes are zero-based, which means the first item is [0], second is [1], and so on.
*/

/*
    - creating an Array. Using an array literal is the easiest way to create a javaScript Array. 
    - syntax: var array_name = [item1, item2, ...];  
*/
var cars = ["Saab", "Volvo", "BMW"];
console.log(cars);

/* 
    - spaces and line breaks are not important. A declaration can span multiple lines.
*/
var cars = [
    "Saab",
    "Volvo",
    "BMW"
  ];
console.log(cars);

var cars = ["Saab",
"Volvo",
"BMW"
];
console.log(cars);

/*
    -  we can also create an array, and then provide the elements.
*/
var cars = [];
cars[0] = "Saab";
cars[1] = "Volvo";
cars[2] = "BMW";
console.log(cars);

// Using the JavaScript Keyword new => The following example also creates an Array, and assigns values to it.
var cars = new Array("Saab", "Volvo", "BMW");
console.log(cars) // note: The all examples above do exactly the same. So there is no need to use new Array(). For simplicity, readability and execution speed, use the array literal method.

/*
    - accessing array elements: 
        - we access an array element by referring to the index number.
*/
var cars = ["Saab", "Volvo", "BMW"];
console.log(cars[0]);
console.log(cars[1]);
console.log(cars[2]);

/*
    - changing an array element:  
        - we change an array element by referring to the index number.
*/
var cars = ["Saab", "Volvo", "BMW"];
cars[0] = 'Opel';
cars[1] = 'Ferari';
cars[2] = 'Toyota';
console.log(cars);

/*
    js arrays are objects => 
        - arrays are a special type of objects. The typeof operator in JavaScript returns "object" for arrays, but JavaScript arrays are best described as arrays.
        - Arrays use numbers to access its "elements". In this example, person[0] returns John:
        - But Object JavaScript uses names to access object properties. 
*/
var cars = ["Saab", "Volvo", "BMW"];
console.log(typeof cars);

var person = ["John", "Doe", 46];
console.log(person[0]);

var person = {firstName:"John", lastName:"Doe", age:46};
console.log(person.firstName);

/*====================================================================================================================================================
Array Elements Can Be Objects =>
                            01. JavaScript variables can be objects. Arrays are special kinds of objects.
                            02. Because of this, you can have variables of different types in the same Array.
                            03. We can have objects in an Array. We can have functions in an Array. We can have arrays in an Array.
myArray[0] = Date.now;
myArray[1] = myFunction;
myArray[2] = myCars;
======================================================================================================================================================*/

/*====================================================================================================================================================
Array Properties and Methods => The real strength of JavaScript arrays are the built-in array properties and methods.
                                cars.length   // lenght is called arry properties. Returns the number of elements.
                                cars.sort()   // sort() is called arry method. Sorts the array
======================================================================================================================================================*/

/*====================================================================================================================================================
length => The length property of an array returns the length of an array (the number of array elements). The length property is always one more than the highest array index.
======================================================================================================================================================*/
var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.length);

// or another way
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var length = fruits.length;
console.log(length);

// we already know how to accessing the First Array Element.
var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits[0]);

// what happend when need Accessing the Last Array Element.
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var lasElements = fruits[fruits.length-1];
console.log(lasElements);

// Array negative indexing process 
var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits[fruits.length-1]);
console.log(fruits[fruits.length-2]);
console.log(fruits[fruits.length-3]);
console.log(fruits[fruits.length-4]);

/*====================================================================================================================================================
Looping Array Elements => One way to loop through an array, is using a for loop:
======================================================================================================================================================*/
var fruits = ["Banana", "Orange", "Apple", "Mango"];
for(var i = 0; i < fruits.length; i++){
    console.log(fruits[i])
} //[ref visit file no: 10]

// we can also use the Array.forEach() function.
var fruits = ["Banana", "Orange", "Apple", "Mango"]; 
function myFunction(value){
    console.log(value);
}
fruits.forEach(myFunction); //[ref visit file no: 11]

/*====================================================================================================================================================
Adding Array Elements => The easiest way to add a new element to an array is using the push() method.
======================================================================================================================================================*/
var fruits = ["Banana", "Orange", "Apple"];
fruits.push("Lemon"); // Adds a new element (Lemon) to fruits.
console.log(fruits)

// New element can also be added to an array using the length property.
var fruits = ["Banana", "Orange", "Apple"];
fruits[fruits.length] = "Lemon";
fruits[fruits.length] = "Mango";
console.log(fruits) //[ref visit file no: 12]

// Adding elements with high indexes can create undefined "holes" in an array.
var fruits = ["Banana", "Orange", "Apple"];
fruits[6] = "Lemon";  // Creates undefined "holes" in fruits
console.log(fruits)  

/*====================================================================================================================================================
Associative Arrays => 
                    01. Many programming languages support arrays with named indexes.
                    02. Arrays with named indexes are called associative arrays (or hashes).
                    03. JavaScript does not support arrays with named indexes.
                    04. In JavaScript, arrays always use numbered indexes. 
======================================================================================================================================================*/
var person = [];
person[0] = "John";
person[1] = "Doe";
person[2] = 46; 
console.log(person[0] + ' ' + person.length)

// If you use named indexes, JavaScript will redefine the array to an object. After that, some array methods and properties will produce incorrect results.
var person = [];
person["firstName"] = "John";
person["lastName"] = "Doe";
person["age"] = 46;
console.log(person[0] + ' ' + person.length)

/*====================================================================================================================================================
The Difference Between Arrays and Objects =>
                            01. In JavaScript, arrays use numbered indexes.  
                            02. In JavaScript, objects use named indexes.
Arrays are a special kind of objects, with numbered indexes.

When to Use Arrays. When to use Objects =>
                            01. JavaScript does not support associative arrays.
                            02. You should use objects when you want the element names to be strings (text).
                            03. You should use arrays when you want the element names to be numbers.
======================================================================================================================================================*/

/*====================================================================================================================================================
JavaScript new Array() => JavaScript has a built in array constructor new Array(). But you can safely use [] instead.
These two different statements both create a new empty array named points:
    const points = new Array(); // bad
    const points = [];         //Good
======================================================================================================================================================*/
// These two different statements both create a new array containing 6 numbers:
var points = new Array(40, 100, 1, 5, 25, 10);
console.log(points)
var points = [40, 100, 1, 5, 25, 10];
console.log(points)

// The new keyword can produce some unexpected results
var points = new Array(40, 100, 1); // Create an array with three elements
console.log(points)

var points = new Array(40, 100); // Create an array with two elements:
console.log(points)

var points = new Array(40); // Create an array with one element ???
console.log(points)

/*====================================================================================================================================================
A Common Error:
const points = [40]; is not the same as: const points = new Array(40);
======================================================================================================================================================*/
var points = [40]; // Create an array with one element
console.log(points[0])
var points = new Array(40); // Create an array with 40 undefined elements:
console.log(points[0])

/*====================================================================================================================================================
How to Recognize an Array => How do I know if a variable is an array? The problem is that the JavaScript operator typeof returns "object".
======================================================================================================================================================*/
var fruits = ["Banana", "Orange", "Apple"];
var type = typeof fruits;
console.log(type)

// Solution 1: To solve this problem ECMAScript 5 (JavaScript 2009) defined a new method Array.isArray()
var fruits = ["Banana", "Orange", "Apple"];
var type =Array.isArray(fruits);
console.log(type)

// Solution 2: The instanceof operator returns true if an object is created by a given constructor.
var fruits = ["Banana", "Orange", "Apple"];
var type = fruits instanceof Array;
console.log(type)