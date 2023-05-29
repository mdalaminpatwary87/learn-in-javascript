/* 
    - arrow functions allow us to write shorter function syntax. 
    - You don't need the function keyword, the return keyword, and the curly brackets.
    - the basic syntax for an arrow function: 
                                            - (parameters) => { statements }
*/

/* 
    - javascript normal function or traditional function.
*/
function add(x, y){
    return x + y;
 };
console.log(add(10,10));

/* 
    - javvascript ES5 anonymous function.
*/
var add = function(x, y){
    return x + y;
 };
console.log(add(10,10));

/* 
    - javascript ES6 arrow function.
*/
var add = (a, b) =>{
    return a + b;
  };
console.log(add(10, 10)); 

/*
  - javascript arrow function without any parameter.
*/
var add = () => {
    return 10;
};
console.log(add());

/*
  - If the function has only one statement, and the statement returns a value, you can remove the brackets and the return keyword. This works only if the function has only one statement
*/
var add = () => 10;
console.log(add());

/* 
  - Here's an example of using an arrow function for a single expression.
*/
var square = x => x * x;
console.log(square(10)); 

/* 
    - javascript arrow function with multiple parameter must use (paramenter1,paramenter2,paramenter3)
*/
var add = (x, y) => x + y;
console.log(add(10,10));