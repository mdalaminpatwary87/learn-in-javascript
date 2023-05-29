/*====================================================================================================================================================
js arithmetic operation operates on two numbers. The two numbers can be literals or constructor.

    var x = 100 + 50; --> called number literal.
    console.log(x);  // return 150

    // or variables:
    var a = 100;
    var b = 50;
    var x = a + b;
    console.log(x) // return 150

    // or expressions:
    var a = 3;
    var x = (100 + 50) * a;
    console.log(x) // return 450

    var a = Number(10 + 10 ) --> called number constructor.
    console.log(a)
    
Now learn, what is Operators and Operands in js =>
                                                - The numbers (in an arithmetic operation) are called operands.
                                                - The operation (to be performed between the two operands) is defined by an operator
                                                  Operand	            Operator	        Operand
                                                  100	                    +	                50
====================================================================================================================================================*/
// (+ [addition]) => adds two or more values together
var x = 10;
var y = 5;
var sum = x + y;
console.log(sum); // adds x and y together, resulting in 15

var x = 10;
var y = 5;
var z = 15;
var sum = x + y + z;
console.log(sum); // adds x and y and z together, resulting in 30

// (- [subtraction]) => subtracts one value from another
var x = 10;
var y = 5;
var difference = x - y;
console.log(difference); // subtracts y from x, resulting in 5

// (* [multiplication]) => multiplies two or more values together
var x = 10;
var y = 5;
var difference = x * y;
console.log(difference); // multiplies x and y together, resulting in 50

var x = 10;
var y = 5;
var z = 2;
var difference = (x * y) * z;
console.log(difference); // multiplies x and y together then x and y values multiplies z , resulting in 500

// (/ [divisionn]) => divides one value by another
var x = 10;
var y = 5;
var difference = x / y;
console.log(difference); // divides x by y, resulting in 2

// (% [modulus]) => returns the remainder of a division operation
var x = 10;
var y = 5;
var quotient = x % y;
console.log(quotient); // calculates the remainder when x is divided by y, resulting in 0 (since 10 is evenly divisible by 5)

var x = 11;
var y = 5;
var quotient = x % y;
console.log(quotient); // calculates the remainder when x is divided by y, resulting in 1 (since 11 is not evenly divisible by 5)

// (** [exponentiation]) => raises one value to the power of another
var x = 10;
var y = 5;
var power = x ** y;
console.log(power); // raises x to the power of y, resulting in 100000

// increment and decrement => In JavaScript, the increment (++) and decrement (--) operators are used to increase or decrease the value of a variable by 1. The increment operator increases the value of a variable by 1, while the decrement operator decreases it by 1. These operators can be used both as prefix and postfix operators. Here are some examples of using the increment and decrement operators in JavaScript:
// (variable ++ [postfix increment]) => আগে ভ্যারিয়েবলের এর দেওয়া মান রিটার্ন করবে। তারপর ভ্যারিয়েবলের এর মান এক বৃদ্ধি পাবে। 
var x = 10;
console.log(x++) // here x = 10, then 10 + 1 = 11
console.log(x)   // here x = 11

var x = 5;
var y = x++;
console.log(y); // here y = 5
console.log(x); // here  x = 6

var x = 5;
x++; // increment operator used as postfix, x is now 6
console.log(x); // outputs x = 6

// (++variable [prefix increment]) => প্রথমে ভ্যারিয়েবলের এর মান এক বৃদ্ধি পাবে। তারপর ভ্যারিয়েবলের এর মান রিটার্ন করবে।
var x = 10;
console.log(++x) // here x = 11.

let x = 5;
let y = x++;
console.log(x); // outputs 6
console.log(y); // outputs 5


let y = 10;
++y; // increment operator used as prefix, y is now 11
console.log(y); // outputs 11

// (variable -- [Postfix decrement]) => আগে ভ্যারিয়েবলের এর দেওয়া মান রিটার্ন করবে। তারপর ভ্যারিয়েবলের এর মান এক হ্রাস পাবে। 
var x = 10;
console.log(x--) // here x = 10, then 10 - 1 = 9
console.log(x)   // here x = 9

let a = 7;
a--; // decrement operator used as postfix, a is now 6
console.log(a); // outputs 6

// (--variable [prefix decrement]) => প্রথমে ভ্যারিয়েবলের এর মান এক হ্রাস পাবে। তারপর ভ্যারিয়েবলের এর মান রিটার্ন করবে।
var x = 10;
console.log(--x) // here x = 9.

let b = 12;
--b; // decrement operator used as prefix, b is now 11
console.log(b); // outputs 11
