/* 
    - let keyword allows you to declare a variable with block scope.
*/
let a = 10; // Here a is 10
if(a == 10){
    let a = "Hello World"; 
    console.log(a); // Here a is Hello World
}
console.log(a); // Here a is 10

/*
    - const are similar to let variables, except that the value cannot be changed.
*/
const b = 10; // Here b is 10
if(b == 10){
    const b = "Hello World"; 
    console.log(b); // Here b is Hello World
}
console.log(b); // Here b is 10

/* 
    - if i use var keyword then variable value is changed because var is a global scope variable
*/
var x = 10; // Here x is 10
if(x == 10){
    var x = "Hello World"; 
    console.log(x); // Here x is Hello World
}
console.log(x); // Here x is Hello World