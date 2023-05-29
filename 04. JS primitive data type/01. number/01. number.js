/*====================================================================================================================================================
JS number data type => JavaScript has only one type of numbers.Numbers can be written with, or without decimals. A number can be write number literal and number constructor.
======================================================================================================================================================*/
// A number without decimals
var x = 3;    
console.log(x);
console.log(typeof x);

// A number with decimals
var x = 3.14; 
console.log(x);
console.log(typeof x);

// Called number literal
var x = 3;  
console.log(x + ' ' + typeof x);

// Called number constructor
var x = Number(3) 
console.log(x + ' ' + typeof x);

// When we write number inside single or double quote. Javascript treat the number string. This happened when write a number using number literal. 
var x = '3';
console.log(x + ' ' + typeof x);

var x = "3";
console.log(x + ' ' + typeof x);

// When write a number using number constructor.Javascript treat that the number data type.
var x = Number('3');
console.log(x + ' ' + typeof x);

var x = Number("3");
console.log(x + ' ' + typeof x);

// Extra large numbers or extra small numbers can be written with scientific exponential notation see notebook for details.
var x =  12e3;  // same as 12000
console.log(x)

var x =  1e1;   // same as 10
console.log(x)

var x = 12e-3;  // same as 0.012
console.log(x)

var x = 12e-4; // same as 0.0012
console.log(x);

/*====================================================================================================================================================
Integer Precision => Integers (numbers without a period or exponent notation) are accurate up to 15 digits. Sometime the maximum number of decimals is 17.
====================================================================================================================================================*/
var x = 999999999999999;   // x will be 999999999999999
console.log(x)

var x = 9999999999999999;  // x will be 10000000000000000
console.log(x)

/*====================================================================================================================================================
Floating Precision => Floating point arithmetic is not always 100% accurate:
====================================================================================================================================================*/
var x = 0.2 + 0.1;
console.log(x);

// To solve the problem above, it helps to multiply and divide:
var x = (0.2 * 10 + 0.1 * 10) / 10;
console.log(x)

var x = 0.3 + 0.1; // here return right output but always not.
console.log(x);

/*====================================================================================================================================================
In javascript adding numbers and strings => WARNING !!
                                         -  JavaScript uses the + operator for both addition and concatenation.
                                         -  Numbers are added and strings are concatenated.
====================================================================================================================================================*/
// If you add two numbers, the result will be a number.
var x = 10;
var y = 20;
var z = x + y;
console.log(z);
console.log(typeof z);

// If you add two strings, the result will be a string concatenation.
var x = "10";
var y = "20";
var z = x + y;
console.log(z)
console.log(typeof z);

// If you add a number and a string, the result will be a string concatenation.
var x = 10;
var y = "20";
var z = x + y;
console.log(z);
console.log(typeof z);

// Here a common mistake is to expect this result to be 30. 
var x = 10;
var y = 20;
var z = "The result is: " + x + y;
console.log(z);
console.log(typeof z); 

// here a common mistake is to expect this result to be 102030.
var x = 10;
var y = 20;
let z = "30";
var result = x + y + z; // javaScript interpreter works from left to right. First 10 + 20 is added because x and y are both numbers. Then 30 + "30" is concatenated because z is a string.
console.log(result);
console.log(typeof result);

/*====================================================================================================================================================
Numeric Strings => JavaScript strings can have numeric content.
====================================================================================================================================================*/
var x = 100;         // x is a number
var y = "100";       // y is a string called numeric string

// JavaScript will try to convert numeric strings to numbers in all numeric operations (-,*,/,%,** etc).
var x = "100";
var y = "10";
var z = x / y;
console.log(z);

// This will also work:
var x = "100";
var y = "10";
var z = x * y;
console.log(z);

// This will also work:
var x = "100";
var y = "10";
var z = x - y;
console.log(z);

// But this will not work:
var x = "100";
var y = "10";
var z = x + y; // JavaScript uses the + operator to concatenate the strings.
console.log(z);  

/*====================================================================================================================================================
NaN [Not a Number] => 
                   - NaN is a JavaScript reserved word indicating that a number is not a legal number
                   - Trying to do arithmetic with a non-numeric string will result in NaN
                   - NaN is a number the typeof NaN returns number
====================================================================================================================================================*/
var x = 100 / "Apple";
console.log(x); 

// However, if the string contains a numeric value,the result will be a number:
var x = 100 / "10";
console.log(x); 

// You can use the global JavaScript function isNaN() to find out if a value is a not a number:
var x = 100 / "Apple";
console.log(isNaN(x));

var x = 100 / "10";
console.log(isNaN(x));

// If you use NaN in a mathematical operation, the result will also be NaN.
var x = NaN;
var y = 5;
var z = x + y;
console.log(z);

// Or the result might be a concatenation like NaN5.
var x = NaN;
var y = '5';
var z = x + y;
console.log(z); 

// NaN is a number: typeof NaN returns number [interviw Q] 
console.log(typeof NaN); 

/*====================================================================================================================================================
Infinity => Infinity (or -Infinity) is the value JavaScript will return. if you calculate a number outside the largest possible number.
====================================================================================================================================================*/
// Division by 0 (zero) generates Infinity
var x =  2 / 0;
console.log(x)

var x = -2 / 0;
console.log(x)

// Infinity is a number: typeof Infinity returns number.
console.log(typeof Infinity) // interviw Q

/*====================================================================================================================================================
Hexadecimal => 
        01. JavaScript interprets numeric constants as hexadecimal if they are preceded by 0x.
        02. Never write a number with a leading zero (like 07).
        03. Some JavaScript versions interpret numbers as octal if they are written with a leading zero.
        04. By default, JavaScript displays numbers as base 10 decimals.
        05. But you can use the toString() method to output numbers from base 2 to base 36.
        06. Hexadecimal is base 16. Decimal is base 10. Octal is base 8. Binary is base 2.
====================================================================================================================================================*/
var x = 0xFF; // similarly we can write 0xff; 
console.log(x);

var myNumber = 32;
console.log(myNumber.toString(10));  // base 10
console.log(myNumber.toString(2));   // base 2
console.log(myNumber.toString(8));   // base 8
console.log(myNumber.toString(16));  // base 16

/*====================================================================================================================================================
JavaScript Numbers as Objects => Normally JavaScript numbers are primitive values created from literals. But numbers can also be defined as objects with the keyword new:
                                 let x = 123; // Number literals
                                 let y = new Number(123); // Numbers as Objects

NoteDown = >
        01. Do not create Number objects.
        02. The new keyword complicates the code and slows down execution speed.
        03. Number Objects can produce unexpected results:
====================================================================================================================================================*/
var x = 123;
console.log(x + ' ' + typeof x);

var x = new Number(123);
console.log(x + ' ' + typeof x);

// When using the == operator, x and y are equal:
var x = 500;
var y = new Number(500);
console.log(x == y);

// When using the === operator, x and y are not equal.
var x = 500;
var y = new Number(500);
console.log(x === y);

// Note the difference between (x==y) and (x===y). Objects can not be compared. Comparing two JavaScript objects always returns false.
// (x == y) true or false? 
var x = new Number(500);
var y = new Number(500);
console.log(x == y);

// (x === y) true or false?
let x = new Number(500);
let y = new Number(500);
console.log(x === y);