/*====================================================================================================================================================
JavaScript map      => 
                    - A Map holds key-value pairs where the keys can be any datatype
                    - A Map remembers the original insertion order of the keys
                    - A Map has a property that represents the size of the map
                    - Maps are an Objects in javascript

how to create a map => You can create a JavaScript Map by
                    -  Create a Map and use Map.set()
                    -  Passing an Array to new Map()
======================================================================================================================================================*/
// Create a Map
var fruits = new Map();

// Create a Map and use Map.set()
var fruits = new Map();
fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200);
console.log(fruits);

// Passing an Array to new Map()
var fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);
console.log(fruits);

// Map key can be any data type where object is not possible 
var fruits = new Map([
    [20, 500],
    ["bananas", 300],
    ["oranges", 200],
  ]);
console.log(fruits);

// Maps are an Objects in javascript
var fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);
console.log(typeof fruits);

var fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);
console.log(fruits instanceof Map)