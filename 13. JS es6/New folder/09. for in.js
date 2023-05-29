/*
    - for in statement loops through the properties of an Object.
    - syntax:
            for (key in object){
                 // code block to be executed
            }
*/

/*
    - access properties in object using js for in loop 
*/
var person = {fname:"John", lname:"Doe", age:25};
for(var x in person){
    console.log(x);
};

/*
    - access value in object using js for in loop 
*/
var person = {fname:"John", lname:"Doe", age:25};
for(var x in person){
    console.log(person[x]);
};

/*
    - access properties and value in object using js for in loop 
*/
var person = {fname:"John", lname:"Doe", age:25};
for(var x in person){
    console.log(x + ': ' + person[x]);
};


/*====================================================================================================================================================
for in (array) => for in statement loops through the properties of an array
                  syntax =>
                         for(variable in array){
                            // code
                        }
======================================================================================================================================================*/
// here accessing index in array using js for in loop 
var numbers = [45, 4, 9, 16, 25];
for (var i in numbers){
    console.log(i);
};
//  here accessing value in array using js for in loop 
var numbers = [45, 4, 9, 16, 25];
for (var i in numbers){
    console.log(numbers[i]);
};
// here accessing index and value in array using js for in loop 
var numbers = [45, 4, 9, 16, 25];
for (var i in numbers){
    console.log(i + ' -> ' + numbers[i]);
};

/*====================================================================================================================================================
Special note => 
             - Do not use for in over an Array if the index order is important.
             - Order does not matter for object.
             - Order matter for array.
======================================================================================================================================================*/
// for objects 
var person = {fname:"John", lname:"Doe", age:25};
console.log(person['fname']);

var person = {lname:"Doe", age:25, fname:"John"}; // return result is correct.Order does not matter for object.
console.log(person['fname']); 

// for array
var numbers = [45, 4, 9, 16, 25];
console.log(numbers[0]);

var numbers = [4, 9, 16, 25, 45];
console.log(numbers[0]); // return result is incorrect when insert,update,delete array item.

/*====================================================================================================================================================
It is better to use for array when the order is important => 
                                                          - for loop
                                                          - for of loop
                                                          - Array.forEach() 
======================================================================================================================================================*/

/*====================================================================================================================================================
Array.forEach() => forEach() method calls a function (a callback function) once for each array element.
                   syntax =>
                            Array.forEach(value, index, array) 
======================================================================================================================================================*/
// here accessing array value using Array.forEach() 
var numbers = [45, 4, 9, 16, 25];
numbers.forEach(function(value){
    console.log(value);
});

// here accessing array value and index using Array.forEach() 
var numbers = [45, 4, 9, 16, 25];
numbers.forEach(function(value,index){
    console.log(index + ' -> ' + value);
});

// here accessing array value and index and array using Array.forEach() 
var numbers = [45, 4, 9, 16, 25];
numbers.forEach(function(value,index, array){
    console.log(index + ' -> ' + value + ' [' + array + ']');
});

// Array.forEach() another ways to use 
// here accessing array value using Array.forEach() 
var numbers = [45, 4, 9, 16, 25];
numbers.forEach(myFunction1)
function myFunction1(value){
    console.log(value);
};

// here accessing array value and index using Array.forEach() 
var numbers = [45, 4, 9, 16, 25];
numbers.forEach(myFunction2)
function myFunction2(value,index){
    console.log( index + ' -> ' + value);
};

// here accessing array value and index and array using Array.forEach() 
var numbers = [45, 4, 9, 16, 25];
numbers.forEach(myFunction3)
function myFunction3(value,index, array){
    console.log(index + ' -> ' + value + ' [' + array + ']');
};