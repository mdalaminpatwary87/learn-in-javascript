/*====================================================================================================================================================
JavaScript Number Methods => Number methods help work with numbers.

Number Methods and Number Properties => 
                            Primitive values (like 3.14 or 2014), cannot have properties and methods (because they are not objects).
                            But with JavaScript, methods and properties are also available to primitive values, because JavaScript treats primitive values as objects when executing methods and properties.
====================================================================================================================================================*/

/*====================================================================================================================================================
toString() Method = > The toString() method returns a number as a string. All number methods can be used on any type of numbers (literals, variables, or expressions).
====================================================================================================================================================*/
var x = 100; 
console.log(x + ' ' + typeof x)

var x = 100; 
var newX = x.toString();
console.log(newX + ' ' + typeof newX) 

console.log((120).toString())       // direct literals.
console.log((100 + 20).toString()) // expressions.

/*====================================================================================================================================================
toExponential() Method => toExponential() returns a string, with a number rounded and written using exponential notation. 
                          A parameter defines the number of characters behind the decimal point.
====================================================================================================================================================*/
var x = 9.656;
console.log(x.toExponential(2));
console.log(x.toExponential(3));
console.log(x.toExponential(4));
console.log(x.toExponential(6));
console.log(x.toExponential()); // The parameter is optional. If you don't specify it, JavaScript will not round the number.

var x = 9.656;
var newX = x.toExponential();
console.log(newX + ' ' + typeof newX); // return string 

/*====================================================================================================================================================
toFixed() Method => toFixed() returns a string, with the number written with a specified number of decimals. 
====================================================================================================================================================*/
var x = 9.656;
console.log(x.toFixed(0));
console.log(x.toFixed(2)); // toFixed(2) is perfect for working with money
console.log(x.toFixed(4));
console.log(x.toFixed(6));

var x = 9.656;
var newX = x.toFixed();
console.log(newX + ' ' + typeof newX); // return string 

/*====================================================================================================================================================
toPrecision() Method => toPrecision() returns a string, with a number written with a specified length:
====================================================================================================================================================*/
var x = 9.656;
console.log(x.toPrecision());
console.log(x.toPrecision(2));
console.log(x.toPrecision(4));
console.log(x.toPrecision(6));

var x = 9.656;
var newX = x.toPrecision();
console.log(newX + ' ' + typeof newX); // return string 

/*====================================================================================================================================================
valueOf() Method => valueOf() returns a number as a number.
                    In JavaScript, a number can be a primitive value (typeof = number) or an object (typeof = object).
                    The valueOf() method is used internally in JavaScript to convert Number objects to primitive values. There is no reason to use it in your code.
                    All JavaScript data types have a valueOf() and a toString() method.
====================================================================================================================================================*/
var x = 123;
console.log(x.valueOf());
console.log((123).valueOf());
console.log((100 + 23).valueOf());

var x = 9.656;
var newX = x.valueOf();
console.log(newX + ' ' + typeof newX); // return number


/*====================================================================================================================================================
toLocaleString() => toLocaleString() returns a number as a string, using local language format. The language format depends on the locale setup on your computer.
Syntax
number.toLocaleString(locales, options)
====================================================================================================================================================*/
var num = 1000000;
var text = num.toLocaleString();
console.log(text + ' ' + typeof text);

var num = 1000000;
var text = num.toLocaleString('bn');
console.log(text + ' ' + typeof text);

var num = 1000000;
var text = num.toLocaleString("bn",{style:"currency", currency:"BDT"});
console.log(text);

let num = 1000000;
let text = num.toLocaleString("en-US", {style:"currency", currency:"USD"});
console.log(text)

/*====================================================================================================================================================
Converting Variables to Numbers => There are 3 JavaScript methods that can be used to convert variables to numbers:
                                01. Number() method
                                02. parseInt() method
                                03. parseFloat() method
These methods are not number methods, but global JavaScript methods.


Global JavaScript Methods    => JavaScript global methods can be used on all JavaScript data types. These are the most relevant methods, when working with numbers:
                             Method	                Description
                             Number()	            Returns a number, converted from its argument.
                             parseFloat()	        Parses its argument and returns a floating point number
                             parseInt()	            Parses its argument and returns an integer 
====================================================================================================================================================*/

/*====================================================================================================================================================
Number() => Number() can be used to convert JavaScript variables to numbers. Remember that, If the number cannot be converted, NaN (Not a Number) is returned.
====================================================================================================================================================*/
console.log(Number(true));
console.log(Number(false));
console.log(Number("10"));
console.log(Number("  10"));
console.log(Number("10  "));
console.log(Number(" 10  "));
console.log(Number("10.33"));
// If the number cannot be converted, NaN (Not a Number) is returned.
console.log(Number("10,33")); // Return NaN
console.log(Number("10 33")); // Return NaN
console.log(Number("John"));  // Return NaN

var x = '100'
var y = '10'
console.log(Number(x - y));
console.log(Number(x * y));
console.log(Number(x / y));

// Number() Method Used on Dates => Number() can also convert a date to a number.
var x = new Date("1970-01-01");
console.log(Number(x));

// The Number() method returns the number of milliseconds since 1.1.1970.
var x = new Date("1970-01-02");
console.log(Number(x)) // The number of milliseconds between 1970-01-02 and 1970-01-01 is 86400000:

var x = new Date("2017-09-30");
console.log(Number(x)) 

/*====================================================================================================================================================
parseInt()  => parseInt() parses a string and returns a whole number. Spaces are allowed. Only the first number is returned. If the number cannot be converted, NaN (Not a Number) is returned.
====================================================================================================================================================*/
console.log(parseInt("-10"));
console.log(parseInt("-10.33"));
console.log(parseInt("10"));
console.log(parseInt("10.33"));
console.log(parseInt("10 20 30"));
console.log(parseInt("10.33 20 30"));
console.log(parseInt("10 years"));
console.log(parseInt("years 10")); // Return NaN 

/*====================================================================================================================================================
parseFloat() => parseFloat() parses a string and returns a number. Spaces are allowed. Only the first number is returned. If the number cannot be converted, NaN (Not a Number) is returned.
====================================================================================================================================================*/
console.log(parseFloat("10"));
console.log(parseFloat("10.33"));
console.log(parseFloat("10 20 30"));
console.log(parseFloat("10 years"));
console.log(parseFloat("years 10")); // Return NaN 

/*====================================================================================================================================================
Number Object Methods => These object methods belong to the Number object:
                         Method	                    Description
                         Number.isInteger()	        Returns true if the argument is an integer
                         Number.isSafeInteger()	    Returns true if the argument is a safe integer
                         Number.parseFloat()	    Converts a string to a number
                         Number.parseInt()	        Converts a string to a whole number
NoteDown => The Number methods Number.parseInt() and Number.parseFloat() are the same as the Global methods parseInt() and parseFloat().The purpose is modularization of globals (to make it easier to use the same JavaScript code outside the browser).
            Number Methods Cannot be Used on Variables. 
            The number methods above belong to the JavaScript Number Object.
            These methods can only be accessed like Number.isInteger().
            Using X.isInteger() where X is a variable, will result in an error: TypeError X.isInteger is not a function.
====================================================================================================================================================*/
/*====================================================================================================================================================
Number.isInteger() Method => The Number.isInteger() method returns true if the argument is an integer.
====================================================================================================================================================*/
var x = 100;
console.log(Number.isInteger(x)); // return true

var x = 100.30;
console.log(Number.isInteger(x)); // return false 

/*====================================================================================================================================================
Number.isSafeInteger() Method => A safe integer is an integer that can be exactly represented as a double precision number. The Number.isSafeInteger() method returns true if the argument is a safe integer.
====================================================================================================================================================*/
var x = 100;
console.log(Number.isSafeInteger(x)); 
console.log(Number.isSafeInteger(9007199254740991)); // MAX_SAFE_INTEGER
console.log(Number.isSafeInteger(9007199254740992)); 

/*====================================================================================================================================================
Number.parseFloat() Method => Number.parseFloat() parses a string and returns a number. Spaces are allowed. Only the first number is returned.
====================================================================================================================================================*/
console.log(Number.parseFloat("10"));
console.log(Number.parseFloat("10.33"));
console.log(Number.parseFloat("10 20 30"));
console.log(Number.parseFloat("10 years"));
console.log(Number.parseFloat("10.3 years"));
console.log(Number.parseFloat("years 10")); // If the number cannot be converted, NaN (Not a Number) is returned.

/*====================================================================================================================================================
Number.parseInt() Method => Number.parseInt() parses a string and returns a whole number. Spaces are allowed. Only the first number is returned.
====================================================================================================================================================*/
console.log(Number.parseInt("-10"));
console.log(Number.parseInt("-10.33"));
console.log(Number.parseInt("10"));
console.log(Number.parseInt("10.33"));
console.log(Number.parseInt("10 6"));
console.log(Number.parseInt("10 years"));
console.log(Number.parseInt("years 10"));  // If the number cannot be converted, NaN (Not a Number) is returned.