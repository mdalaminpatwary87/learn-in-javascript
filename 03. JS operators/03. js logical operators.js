// Logical operators => In JavaScript, logical operators are used to combine two or more conditions and return a boolean (true or false) based on the result.

/*
    &&(AND) => The logical AND operator (&&) returns true if both conditions are true, and false if one or both conditions are false.
    0 0 - 0
    0 1 - 0
    1 0 - 0
    1 1 - 1
*/
var x = 6;
var y = 3;
console.log(x < 10 && y > 1);
console.log(x < 10 && y < 1);

/*
    || (OR) => The logical OR operator (||) returns true if one or both conditions are true, and false if both conditions are false.
    0 0 - 0
    0 1 - 1
    1 0 - 1
    1 1 - 1
*/
var x = 6;
var y = 3;
console.log(x == 5 || y == 5);
console.log(x == 6 || y == 0);
console.log(x == 0 || y == 3);
console.log(x == 6 || y == 3);

/*
    ! (NOT) => The logical NOT operator (!) returns true if the condition is false, and false if the condition is true.
    0 - 1
    1 - 0
*/
var x = 6;
var y = 3;
console.log ( ! x > y) 
console.log ( ! x < y) 


// Logical operators are often used in conditional statements to control the flow of a program. For example, you might use the logical AND operator to check if two conditions are true before executing a block of code:
// This code checks if the age is greater than or equal to 16 and if the person has a driver's license, and if both conditions are true, it logs a message to the console.
var age = 25;
var hasLicense = true;

if (age >= 16 && hasLicense) {
  console.log("You can legally drive.");
}
