/*====================================================================================================================================================
Math methods => 
             - The syntax for Math any methods is : Math.method(number)
======================================================================================================================================================*/
// Math.floor() => Math.floor(x) returns the value of x rounded down to its nearest integer
console.log(Math.floor(4.9));
console.log(Math.floor(4.7));
console.log(Math.floor(4.4));
console.log(Math.floor(4.2));

// Math.ceil() => Math.ceil(x) returns the value of x rounded up to its nearest integer
console.log(Math.ceil(4.9));
console.log(Math.ceil(4.7));
console.log(Math.ceil(4.4));
console.log(Math.ceil(4.2));

// Math.round() => Math.round(x) returns the nearest integer
console.log(Math.round(4.9));
console.log(Math.round(4.7));
console.log(Math.round(4.4));
console.log(Math.round(4.3));

// Math.pow() => Math.pow(x, y) returns the value of x to the power of y
console.log(Math.pow(8, 2));
console.log(Math.pow(8, 3));

// Math.sqrt() => Math.sqrt(x) returns the square root of x
console.log(Math.sqrt(64));
console.log(Math.sqrt(8));

// Math.abs() => Math.abs(x) returns the absolute (positive) value of x
console.log(Math.abs(-4.7));
console.log(Math.abs(4.7));

// Math.min() and Math.max() => Math.min() and Math.max() can be used to find the lowest or highest value in a list of arguments.
console.log(Math.min(0, 150, 30, 20, -8, -200));
console.log(Math.max(0, 150, 30, 20, -8, -200));

// Math.sign() => Math.sign(x) returns if x is negative, null or positive. Math.sign() were added to JavaScript 2015 - ES6.
console.log(Math.sign(-4));
console.log(Math.sign(4));
console.log(Math.sign(0));

// Math.trunc() => Math.trunc(x) returns the integer part of x. Math.trunc() were added to JavaScript 2015 - ES6.
console.log(Math.trunc(4.9));
console.log(Math.trunc(4.7));
console.log(Math.trunc(4.4));
console.log(Math.trunc(4.2));

// Math.sin() => Math.sin(x) returns the sine (a value between -1 and 1) of the angle x (given in radians). If you want to use degrees instead of radians, you have to convert degrees to radians: Angle in radians = Angle in degrees x PI / 180.
console.log(Math.sin(90 * Math.PI / 180));

// Math.cos() => Math.cos(x) returns the cosine (a value between -1 and 1) of the angle x (given in radians). If you want to use degrees instead of radians, you have to convert degrees to radians: Angle in radians = Angle in degrees x PI / 180.
console.log(Math.cos(0 * Math.PI / 180));

// Math.log() Method => Math.log(x) returns the natural logarithm of x. The natural logarithm returns the time needed to reach a certain level of growth. Math.E and Math.log() are twins.
console.log(Math.log(1));
console.log(Math.log(2));
console.log(Math.log(3));

// Math.log2() => Math.log2(x) returns the base 2 logarithm of x.
console.log(Math.log2(8)); // How many times must we multiply 2 to get 8?

// Math.log10() Method => Math.log10(x) returns the base 10 logarithm of x.
console.log(Math.log10(1000)); // How many times must we multiply 10 to get 1000?