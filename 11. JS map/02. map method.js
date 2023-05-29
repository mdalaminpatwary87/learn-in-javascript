/*====================================================================================================================================================
set()	                    Sets the value for a key in a Map
get()	                    Gets the value for a key in a Map
delete()	                Removes a Map element specified by the key
has()	                    Returns true if a key exists in a Map
clear()                 	Removes all the elements from a Map
forEach()	                Calls a function for each key/value pair in a Map
values()	                Returns an iterator object of the values in a Map
keys()	                    Returns an iterator object with the keys in a Map
entries()	                Returns an iterator with the [key, value] pairs in a Map
======================================================================================================================================================*/
// set() => Sets the value for a key in a Map
var fruits = new Map();
fruits.set("apples", 500);
fruits.set("bananas",300);
fruits.set("oranges",200);
console.log(fruits);

// set() => set() method can also be used to change existing Map values
var fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200],
  ]);
fruits.set("apples", 100);
console.log(fruits);

// get() => Gets the value for a key in a Map
var fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200],
  ]);
console.log(fruits.get("apples"))

// delete() => Removes a Map element specified by the key
var fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);
fruits.delete("apples");
console.log(fruits);

//has() => Returns true if a key exists in a Map
var fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);
console.log(fruits.has("apples"));

// clear() => Removes all the elements from a Map
var fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);
console.log(fruits.clear());

// forEach() => Calls a function for each key/value pair in a Map
var fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);
fruits.forEach(function(value , key){
    console.log(key + ' -> ' + value);
});

// values() => Returns an iterator object of the values in a Map
var fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);
console.log(fruits.values());

var fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);
for (var i of fruits.values()){
    console.log(i);
};

// Map.keys() => The keys() method returns an iterator object with the keys in a Map
var fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);
for (var i of fruits.keys()){
    console.log(i);
};

// entries() Method => The entries() method returns an iterator object with the [key, values] in a Map.
var fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);
for (var i of fruits.entries()){
    console.log(i);
};