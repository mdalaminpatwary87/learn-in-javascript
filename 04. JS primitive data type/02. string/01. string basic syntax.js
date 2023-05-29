/*====================================================================================================================================================
JavaScript string data type => 
                    01. In programming, text values are called text string.
                    02. Strings are written inside double or single quotes. A JavaScript string is zero or more characters written inside quotes.
                    03. JavaScript strings are for storing and manipulating text. 
====================================================================================================================================================*/
var x = "Hello World"; //string - using double quotes
console.log(x);

var x = 'Hello World'; //string - using single quotes
console.log(x);

var x = `Hello World`; //string - using backtrick sing also works
console.log(x);

/*====================================================================================================================================================
String Literal & String Constructor
====================================================================================================================================================*/
var str = "Something" // called string literal
console.log(str);

var str = String('Something')  // called string constructor
console.log(str);

/*====================================================================================================================================================
cheek data type
====================================================================================================================================================*/
var x = "Hello World";
console.log(typeof x);

/*====================================================================================================================================================
we can use quotes inside a string
====================================================================================================================================================*/
var answer1 = "It's alright";             // Single quote inside double quotes
var answer2 = "He is called 'Johnny'";    // Single quotes inside double quotes
var answer3 = 'He is called "Johnny"';    // Double quotes inside single quotes
console.log(answer1);
console.log(answer2);
console.log(answer3);

/*====================================================================================================================================================
Escape Character => 
Because strings must be written within quotes, JavaScript will misunderstand this string: let text = "We are the so-called "Vikings" from the north.";
The string will be chopped to "We are the so-called". The solution to avoid this problem, is to use the backslash escape character. The backslash (\) escape character turns special characters into string characters:

Code	        Result	        Description
\'              '	            Single quote
\"	            "	            Double quote
\\	            \	            Backslash

Six other escape sequences are valid in JavaScript:
\b	            Backspace
\f	            Form Feed
\n	            New Line
\r	            Carriage Return
\t	            Horizontal Tabulator
\v	            Vertical Tabulator
The 6 escape characters above were originally designed to control typewriters, teletypes, and fax machines. They do not make any sense in HTML.
====================================================================================================================================================*/
// The sequence \'  inserts a single quote in a string:
var text = 'It\'s alright.';
console.log(text);

var x = "Hello \'world\'"
console.log(x);

// The sequence \"  inserts a double quote in a string:
var text = "We are the so-called \"Vikings\" from the north.";
console.log(text);

var text = "We are the so-called \"Vikings\' from the north.";
console.log(text);

//The sequence \\  inserts a backslash in a string:
var text = "The character \\ is called backslash.";
console.log(text);

var text = "The character \\ is called \\ backslash.";
console.log(text);

// \n => newline 
var str = 'Hello is a \nstring'
console.log(str); 

// \t =>  horizontal tab
var str = 'Hello is a \tstring'
console.log(str);

/*====================================================================================================================================================
JavaScript Strings as Objects => Normally, JavaScript strings are primitive values, created from literals. But strings can also be defined as objects with the keyword new:
                                 var x = "John"; // called literals 
                                 console.log(x);

                                 var x = new String("John"); // called string objects
                                 console.log(x);


NoteDown => Do not create Strings objects.
            The new keyword complicates the code and slows down execution speed.
            String objects can produce unexpected results.
====================================================================================================================================================*/
var x = "John";
console.log(x + ' ' + typeof x);

var x = new String("John");
console.log(x + ' ' + typeof x);

// When using the == operator, x and y are equal:
var x = "John";
var y = new String("John");
console.log(x == y);

// When using the === operator, x and y are not equal:
var x = "John";
var y = new String("John");
console.log(x === y); 

/*====================================================================================================================================================
Never Create Strings as Objects. JavaScript objects cannot be compared. Bleow example Comparing two JavaScript objects always returns false.
====================================================================================================================================================*/
var x = new String("John");   // x is an object
var y = new String("John");   // y is an object
console.log(x == y)

var x = new String("John");   // x is an object
var y = new String("John");   // y is an object
console.log(x === y)

/*====================================================================================================================================================
Compare Two String => Javascript uses Lexicographic system to compare to string. Lexicol Order z,y,x....a, Z,Y,X....B,A 
====================================================================================================================================================*/
var a = 'abc';
var b = 'bcd';
console.log( a === b);
console.log( a > b);
console.log( a < b);

console.log('z' > 'Z');
console.log('a' > 'Z');
console.log('001' == 1);
 