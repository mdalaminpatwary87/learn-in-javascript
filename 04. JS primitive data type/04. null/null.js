/*====================================================================================================================================================
Null => In JavaScript null is "nothing". Unfortunately, in JavaScript, the data type of null is an object.
======================================================================================================================================================*/
var x = null;    
console.log(x);          //  return value null 
console.log(typeof x);   //  return type is object

// create an  objects 
var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
console.log(person);
console.log(typeof person);

// we can empty an object by setting it to null:
var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
person = null;
console.log(person);
console.log(typeof person);