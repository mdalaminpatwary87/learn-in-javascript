/*====================================================================================================================================================
set in javascript     => 
                      - A JavaScript Set is a collection of unique values. 
                      - Each value can only occur once in a Set. 
                      - A Set can hold any value of any data type.
                      - Javascript sets are objects

how to create a set   => You can create a JavaScript Set by:
                      -  Create a new Set and use add() to add values
                      -  Create a new Set and use add() to add variables
                      -  Passing an Array to new Set()
======================================================================================================================================================*/
// Create a Set
var letters = new Set(); 

// Create a new Set and use add() to add values
var letters = new Set(); 
letters.add("a"); 
letters.add("b");
letters.add("c");
console.log(letters);

// Create a new Set and use add() to add variables
var letters = new Set();
var a = "a"; 
var b = "b";
var c = "c";
letters.add(a);
letters.add(b);
letters.add(c);
console.log(letters);

// Passing an Array to new Set()
var letters = new Set(["a","b","c"]); 
console.log(letters);

// set are an object in javascript 
var letters = new Set(["a","b","c"]);
console.log(typeof letters);

var letters = new Set(["a","b","c"]);
console.log(letters instanceof Set);