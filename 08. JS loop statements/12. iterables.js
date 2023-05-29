/*====================================================================================================================================================
JavaScript Iterables => 
                        Iterables are iterable objects (like Arrays).
                        Iterables can be accessed with simple and efficient code.
                        Iterables can be iterated over with for..of loops

Iterating => Iterating is easy to understand. It simply means looping over a sequence of elements. Here are some easy examples:
                        Iterating over a String
                        Iterating over an Array
======================================================================================================================================================*/
// Iterating Over a String => You can use a for..of loop to iterate over the elements of a string
var name = "W3Schools";
for (var x of name) {
  console.log(x)
}

// Iterating Over an Array => You can use a for..of loop to iterate over the elements of an Array:
var letters = ["a","b","c"];
for (var x of letters) {
    console.log(x)
}

// Iterating Over a Set => You can use a for..of loop to iterate over the elements of a Set:
var letters = new Set(["a","b","c"]);
for (var x of letters) {
  console.log(x)
}

// Iterating Over a Map => You can use a for..of loop to iterate over the elements of a Map:
var fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);
for (var x of fruits) {
  console.log(x)
}
