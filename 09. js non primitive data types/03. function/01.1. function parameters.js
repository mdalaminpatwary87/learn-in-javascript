/*====================================================================================================================================================
Function Parameters => 
            01. Function parameters are the names listed in the function definition.
            02. A JavaScript function does not perform any checking on parameter values (arguments).
            03. Function arguments are the real values passed to (and received by) the function.
        function functionName(parameter1, parameter2, parameter3) {
            // code to be executed
        }
Parameter Rules => 
            01. JavaScript function definitions do not specify data types for parameters.
            02. JavaScript functions do not perform type checking on the passed arguments.
            03. JavaScript functions do not check the number of arguments received.
====================================================================================================================================================*/
function a(x,y){ // x,y function parameters
    return x * y;
}
a(5,5); // function arguments
a(10,5); // aslo function new arguments

// 01. JavaScript function definitions do not specify data types for parameters.
function a(x,y){ 
    return x * y;
}
a('HriDoy', 2495); //  02. JavaScript functions do not perform type checking on the passed arguments.

// 03. JavaScript functions do not check the number of arguments received.
function a(x,y){ 
    return x * y;
}
console.log(a(4, 10, 50,200)); 

/*====================================================================================================================================================
Default Parameters => If a function is called with missing arguments (less than declared), the missing values are set to undefined.

====================================================================================================================================================*/
function a(x,y){ 
    return x * y;
}
console.log(a(5)); // return NaN

// Sometimes this is acceptable, but sometimes it is better to assign a default value to the parameter:
function myFunction(x, y) {
    if (y === undefined) {
      y = 2;
    }  
    return x * y;
  }
  console.log(myFunction(5));

// ECMAScript 2015 allows default parameter values in the function declaration:
function myFunction(x, y = 2) {
    return x * y;
  }
  console.log(myFunction(5));

/*====================================================================================================================================================
Arguments Object => 
JavaScript functions have a built-in object called the arguments object.
The argument object contains an array of the arguments used when the function was called (invoked).
====================================================================================================================================================*/
function a(x,y){
    console.log(arguments); // array of objects 
    return x * y;
}
console.log(a(5,5)); 

// This way you can simply use a function to find (for instance) the highest value in a list of numbers:
function findMax() {
    let max = -Infinity;
    for(let i = 0; i < arguments.length; i++) {
      if (arguments[i] > max) {
        max = arguments[i];
      }
    }
    return max;
  } 
console.log(findMax(1, 123, 500, 115, 44, 88))

// Or create a function to sum all input values:
function sumAll() {
    let sum = 0;
    for(let i = 0; i < arguments.length; i++) {
      sum += arguments[i];
    }
    return sum;
  }
  console.log(sumAll(1, 123, 500, 115, 44, 88));

/*====================================================================================================================================================
If a function is called with too many arguments (more than declared), these arguments can be reached using the arguments object.
====================================================================================================================================================*/
function a(x,y){
    console.log(arguments); 
    console.log(arguments.length); 
    return x * y;
}
console.log(a(5,5,10,20)); 

/*====================================================================================================================================================
Arguments are Passed by Value =>
                The parameters, in a function call, are the function's arguments.
                JavaScript arguments are passed by value: The function only gets to know the values, not the argument's locations.
                If a function changes an argument's value, it does not change the parameter's original value.
                Changes to arguments are not visible (reflected) outside the function.
====================================================================================================================================================*/
function a(x,y){
    return x * y;
}
var m = 5;
var n = 6;
console.log(a(m, n)); // only value pass. m,n value not change.
console.log(m)

function a(x,y){
    x *= 5
    return x * y;
}
var m = 5;
var n = 6;
console.log(a(m, n)); // only value pass. m,n value not change.
console.log(m)

/*====================================================================================================================================================
Objects are Passed by Reference => 
                    In JavaScript, object references are values.
                    Because of this, objects will behave like they are passed by reference:
                    If a function changes an object property, it changes the original value.
                    Changes to object properties are visible (reflected) outside the function.
====================================================================================================================================================*/
function a(x){
    x.one = 7;
    return x.one * x.two;
}
var m = {
    one : 4,
    two : 5
};
console.log(a(m));
console.log(m)