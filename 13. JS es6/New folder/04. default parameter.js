/* 
   - Default parameters are a feature introduced in ES6 that allow you to specify default values for function parameters.
   - If a parameter is not passed or is passed as undefined, the default value will be used instead.
*/

/* 
   - Here's an example of using default parameters in JavaScript.
   - In this example, we define a function called greet that takes a name parameter. We set the default value of the name parameter to "World". If the name parameter is not passed or is passed as undefined, the default value "World" will be used instead. We then call the greet function twice, once without passing any arguments, and once with the argument "John".
*/
function greet(name = "World"){
   console.log(`Hello, ${name}!`);
 }
 greet();
 greet("John");

/* 
   - Here's an example of using default parameters in JavaScript.
*/
function myFunction(x, y = 10) {
   return x + y;
 }
console.log(myFunction(10));
console.log(myFunction(10,20));