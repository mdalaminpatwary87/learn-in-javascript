// JavaScript Expressions => An expression is a combination of values, variables, and operators, which computes to a value.The computation is called an evaluation. For example, 5 * 10 evaluates to 50. So In JavaScript, an expression is a piece of code that evaluates to a value.
// Arithmetic Expressions => Arithmetic expressions evaluate to a numeric value
console.log(5 + 3);
console.log(8 - 3);

// Expressions can also contain variable values
var x = 10;
console.log(x * 10);

// The values can be of various types, such as numbers and strings. For example, "John" + " " + "Doe", evaluates to "John Doe":
console.log('John' + ' ' + 'Doe');

// Function Expressions => Function expressions create a new function.
var square = function(x) {
    return x * x;
  }
console.log(square(5));

// Object Expressions => Object expressions create a new object.
var person = {
    name: 'John',
    age: 30
  }
console.log(person.name);

// Logical Expressions => Logical expressions evaluate to a boolean value (true or false).
console.log(true && false);
console.log(true || false );
console.log(!false);