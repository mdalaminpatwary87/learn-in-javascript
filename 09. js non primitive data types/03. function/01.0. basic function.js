/*====================================================================================================================================================
JavaScript Functions => A JavaScript function is a block of code designed to perform a particular task. A JavaScript function is executed when "something" invokes it (calls it).
  Syntax => 
        function functionName(){
                // all code here
        }
01. A JavaScript function is defined with the function keyword, followed by a Function name, followed by parentheses ().
02. Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).
03. The parentheses may include parameter names separated by commas: (parameter1, parameter2, ...)
04. The code to be executed, by the function, is placed inside curly brackets: {}
05. Function parameters are listed inside the parentheses () in the function definition.
06. Function arguments are the values received by the function when it is invoked.
07. Inside the function, the arguments (the parameters) behave as local variables.

Why Functions? => 
You can reuse code: Define the code once, and use it many times. You can use the same code many times with different arguments, to produce different results.
====================================================================================================================================================*/
// define a function with invoke or calling a function 
function myFunction(){
    console.log('Jasim is slpeeing from 10 PM')
}
myFunction() // invoke or calling function. Remember that parentheses() must be use when Invokes the function. Otherwise invoke not work. myFunction refers to the function object, and myFunction() refers to the function result.
console.log(myFunction) // return [Function: myFunction]. Beacuse without parentheses() myFunction refers to the function object.
console.log(myFunction()) // myFunction() refers to the function result.

// define a function with parameter & arguments.
function myFunction(name, time){ // name & time is a parameter
    console.log(name + ' Jasim is slpeeing from ' + time)
}
myFunction('Jasim','10 PM') // This is called arguments. 
myFunction('Korim','11 PM')
myFunction('Rofiq','12 AM')

/*====================================================================================================================================================
What is function declaration or a function expression? => 
Function Declarations => functions are declared with the following syntax. Declared functions are not executed immediately. They are "saved for later use", and will be executed later, when they are invoked (called upon).
                         Semicolons are used to separate executable JavaScript statements. Since a function declaration is not an executable statement, it is not common to end it with a semicolon.
syntax => 
        function functionName(parameters) {
          // code to be executed
        }

Function Expressions => A JavaScript function can also be defined using an expression. A function expression can be stored in a variable.
====================================================================================================================================================*/
// Function Expressions. A function expression can be stored in a variable
var myFunction = function(){console.log('Jasim is slpeeing from 10 PM')}; // This is actually an anonymous function (a function without a name). The function ends with a semicolon because it is a part of an executable statement.

// After a function expression has been stored in a variable, the variable can be used as a function. Functions stored in variables do not need function names. They are always invoked (called) using the variable name.
var myFunction = function(){console.log('Jasim is slpeeing from 10 PM')};
myFunction()

/*====================================================================================================================================================
Function() Constructor => Functions can also be defined with a built-in JavaScript function constructor called Function().
====================================================================================================================================================*/
var myFunction = new Function("a", "b", "return a * b");
console.log(myFunction(10,10)) // But we actually don't have to use the function constructor. Most of the time, we can avoid using the new keyword in JavaScript.

/*====================================================================================================================================================
Local Variables => Variables declared within a JavaScript function, become LOCAL to the function. Local variables can only be accessed from within the function.
====================================================================================================================================================*/
//Inside the function, the arguments (the parameters) behave as local variables.
function myFunction(names){
    console.log(names + ' Jasim is slpeeing from')
}
console.log(names) // ReferenceError: names is not defined. Because name is local variable. This is not work like variable outside. This only work by inside a function. 

// another example 
// code here can NOT use carName
console.log(carName) // //ReferenceError: carName is not defined
function myFunction() {
    let carName = "Volvo"; // var carName = "Volvo"; same as let
    // code here CAN use carName
  }
// code here can NOT use carName
console.log(carName) //ReferenceError: carName is not defined

// Since local variables are only recognized inside their functions, variables with the same name can be used in different functions.
function myFunction() {
    var carName = "Volvo"; 
  }
function myFunction2() {
    var carName = "BMW"; 
  }

// Function with Return => When JavaScript reaches a return statement, the function will stop executing. Functions often compute a return value. The return value is "returned" back to the "caller":
function myFunction(a, b) {
  return a * b;             // Function returns the product of a and b
}
var x = myFunction(4, 3);  // Function result store variable. then called funciton, then return value will end up in x.  
console.log(x)

// When JavaScript reaches a return statement, the function will stop executing.
function myFunction(a, b) {
  return a * b;             
  console.log('When JavaScript reaches a return statement, the function will stop executing.')
}
var x = myFunction(4, 3);  
console.log(x)

// when developer don't give return type ,then js by default end of the code {} setting return undefined, that why show undefined when we console. 
function myFunction(){
    console.log('Jasim is slpeeing from 10 PM')
}
myFunction() // plz open chrome browser see this.

// why function -> we can reuse code: Define the code once, and use it many times.
function myFunction(){
    console.log('Jasim is slpeeing from 10 PM')
}
myFunction() // reuse code any where we need. 
myFunction() // reuse code any where we need. 
myFunction() // reuse code any where we need. 

// can use the same code many times with different arguments, to produce different results.
function myFunction(name, time){ 
    console.log(name + ' Jasim is slpeeing from ' + time)
}
myFunction('Jasim','10 PM') // same code with different arguments,to produce different results.
myFunction('Korim','11 PM') // same code with different arguments,to produce different results.
myFunction('Rofiq','12 AM') // same code with different arguments,to produce different results.

/*====================================================================================================================================================
Functions Used as Variable Values => Functions can be used the same way as you use variables, in all types of formulas, assignments, and calculations.
====================================================================================================================================================*/
// Instead of using a variable to store the return value of a function.
function myFunction(name, time){
    return (name + ' is slpeeing from ' + time + '.')
}
var x = myFunction('Rohim', '3 PM');
var text = 'Congratulation! Mr. ' + x + " It's bed for health";
console.log(text)
var text = 'Congratulation! Mr. ' + myFunction('HriDoy', '9 PM') + " It's good for health";
console.log(text)

// JavaScript functions can be used in expressions:
function myFunction(a, b) {
  return a * b;
}
var x = myFunction(4, 3) * 2;
console.log(x)

// problem solve 
function myFunction(name,time){
   return('Congratulation! Mr. ' + name + ' you slpeeing from ' + time +' '+(time < 12 ? 'PM' : 'AM') + '.' + " It's " + (time <= 10 ? 'Good': 'Bed') + " for health." )
}
var a = myFunction('HriDoy', 12)
var b = myFunction('Rohim', 9)
var g = myFunction('HriDoy', '11 PM') + " Warnning! Change Your Activity.";
console.log(a)
console.log(b)
console.log(g)

/*====================================================================================================================================================
Function Hoisting => 
            01. Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope.
            02. Hoisting applies to variable declarations and to function declarations.

Note: Functions defined using an expression are not hoisted.
====================================================================================================================================================*/
// Because of this, JavaScript functions can be called before they are declared:
myFunction(5);
console.log(myFunction(5));

function myFunction(y) {
  return y * y;
}

/*====================================================================================================================================================
Self-Invoking Functions Or IIFE (Immediately Invoked Function Expression) => 
            Function expressions can be made "self-invoking".
            A self-invoking expression is invoked (started) automatically, without being called.
            Function expressions will execute automatically if the expression is followed by ().
            You cannot self-invoke a function declaration.
            You have to add parentheses around the function to indicate that it is a function expression:
====================================================================================================================================================*/
(function () {
  console.log("Hello! I called myself");  // I will invoke myself
})();

(function () {
  let x = "Hello! I called myself";  // I will invoke myself
  console.log(x)
})();

// Note => The function above is actually an anonymous self-invoking function (function without name).

/*====================================================================================================================================================
Functions are Objects => 
          The typeof operator in JavaScript returns "function" for functions.
          But, JavaScript functions can best be described as objects.
          JavaScript functions have both properties and methods.
====================================================================================================================================================*/
// The arguments.length property returns the number of arguments received when the function was invoked:
function myFunction(a, b) {
  return arguments.length;
}
console.log(myFunction(4, 3));

// check  function arguments
function myFunction(a, b) {
  console.log(arguments)
  console.log(arguments.length)
  console.log(arguments[0])
  console.log(arguments[1])
  return a * b;
}
console.log(myFunction(4, 3));

// The toString() method returns the function as a string
function myFunction(a, b) {
  return a * b;
}
console.log(myFunction.toString());
/*====================================================================================================================================================
Arrow Functions => 
          01. Arrow functions allows a short syntax for writing function expressions.
          02. We don't need the function keyword, the return keyword, and the curly brackets.
====================================================================================================================================================*/
var x = function(x, y) { // ES5
  return x * y;
}
console.log(x(5,5));

var x = (x,y) => x * y; // ES6
console.log(x(5,5));
/*========================================================Note for arrow function===================================================================
Arrow functions do not have their own this. They are not well suited for defining object methods.
====================================================================================================================================================*/
var person = {
  firstName:"John",
  lastName:"Doe",
  fullName: function(){
    return this.firstName + ' ' + this.lastName;
  }
}
console.log(person.fullName());

var person = {
  firstName:"John",
  lastName:"Doe",
  fullName: () => {
    return this.firstName + ' ' + this.lastName;   // They are not well suited for defining object methods. return undefined undefined
  }
}
console.log(person.fullName());
/*========================================================Note for arrow function===================================================================
Arrow functions are not hoisted. They must be defined before they are used.
Using const is safer than using var, because a function expression is always constant value.
You can only omit the return keyword and the curly brackets if the function is a single statement. Because of this, it might be a good habit to always keep them.
====================================================================================================================================================*/
// when only one statements then avoid curly brackets like this. 
var x = (x,y) => x * y; 
console.log(x(5,5));

// when multiple statements must use curly brackets like this. 
var x = (x,y) => {
  console.log("I'm Here!")
  return x * y
}; 
console.log(x(5,5));



