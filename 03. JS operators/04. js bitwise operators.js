// Bitwise operators => In JavaScript, bitwise operators are used to manipulate the binary representations of numbers. They work by treating each number as a series of 32 bits (zeros and ones) and performing operations on those bits. Here are the six bitwise operators in JavaScript

// bitwise AND (&) => The bitwise AND operator (&) returns a 1 in each bit position for which the corresponding bits of both operands are 1.
var x = 12; 
var y = 25; 
console.log(x & y) 

// bitwise OR (|) => The bitwise OR operator (|) returns a 1 in each bit position for which the corresponding bits of either or both operands are 1.
var x = 12; 
var y = 25; 
console.log(x | y)

// bitwise XOR (^) => The bitwise XOR operator (^) returns a 1 in each bit position for which the corresponding bits of either but not both operands are 1.
var x = 12; 
var y = 25; 
console.log(x ^ y)

// bitwise NOT (~) => The bitwise NOT operator (~) returns the one's complement of its operand, which means it inverts all the bits.
var x = 10; 
console.log(~ x) 

var x = 12; 
console.log(~ x) 

//Example 5: Bitwise Left shift (<<) Operator.
var a = 5;
var b = 1;
console.log( a << b)

var a = 5;
var b = 2;
console.log( a << b)

var a = -10;
var b = 1;
console.log( a << b)

var a = -10;
var b = 2;
console.log( a << b)

// Example 6: Bitwise Signed Right Shift (>>)
var a = 10;
var  b = 1;
console.log( a >> b)

var a = 10;
var  b = 2;
console.log( a >> b)

var a = -10;
var  b = 1;
console.log( a >> b)

var a = -10;
var  b = 2;
console.log( a >> b)

//Example 7: Bitwise Zero fill right shift (>>>)
var a = 10;
var b = 1;
console.log( a >>> b)