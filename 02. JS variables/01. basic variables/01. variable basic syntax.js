/*Javascript variables => Variables are containers for storing data & data values.In JavaScript, you can declare variables using the var, let, or const keywords. The var keyword is used to declare variables with function scope, while let and const are used to declare variables with block scope. Four Ways to declare a JavaScript Variable.
                       -  Using var keyword.
                       -  Using let keyword.
                       -  Using const keyword.
                       -  Using nothing.
*/

// Javascript variable syntax
var x;       // Called variable declaration. Creating a variable in JavaScript is called "declaring" a variable.
x = 5;       // Called variable assign. To assign a value to the variable, use the equal sign.   
console.log(x);  

// Shorthand process for variable declare and assign
var x = 5;
console.log(x)

// Value -> undefined => A variable declared without assign a value the value will return undefined.
var carName;
console.log(carName);

/*====================================================================================================================================================
Javascript Assignment Operator => In JavaScript, the equal sign (=) is an "assignment" operator, not an "equal to" operator. 
                               -  The "equal to" operator is written like == in JavaScript. Assignment operator (=) assigns a value to a variable.
====================================================================================================================================================*/
var carName = "Volvo";
console.log(carName);

// called equal to operator like in js 
var x = 100;
console.log(x == 100); 

/*====================================================================================================================================================
JavaScript Identifiers   => All JavaScript variables must be identified with unique names. These unique names are called identifiers. Identifiers can be short names (like x and y) or more descriptive names (age, sum, totalVolume). The general rules for constructing names for variables (unique identifiers) are:
                         -  Identifiers can be short names (like x and y) or more descriptive names (age, sum, totalVolume).
                         -  Names can contain letters(capital or small), digits, underscores, and dollar signs.
                         -  Names must begin with a letter
                         -  Names can also begin with $ and _ 
                         -  JavaScript identifiers are case-sensitive like names are case sensitive (y and Y are different variables)
                         -  Reserved words (like JavaScript keywords) cannot be used as names
                         -  Remember that, identifiers can not start with digit
JavaScript Dollar Sign $ => 
                         - Since JavaScript treats a dollar sign as a letter, identifiers containing $ are valid variable names.
                         - Using the dollar sign is not very common in JavaScript, but professional programmers often use it as an alias for the main function in a JavaScript library.
                         - In the JavaScript library jQuery, for instance, the main function $ is used to select HTML elements. In jQuery $("p"); means "select all p elements".

JavaScript Underscore (_) => 
                          -  Since JavaScript treats underscore as a letter, identifiers containing _ are valid variable names.
                          -  Using the underscore is not very common in JavaScript, but a convention among professional programmers is to use it as an alias for "private (hidden)" variables.

JavaScript and Camel Case => Historically, programmers have used different ways of joining multiple words into one variable name.
                          -  Hyphens:
                          -  first-name, last-name, master-card, inter-city ---> Remember That, Hyphens are not allowed in JavaScript. They are reserved for subtractions.

                          -  Underscore:
                          -  first_name, last_name, master_card, inter_city.

                          -  Upper Camel Case (Pascal Case):
                          -  FirstName, LastName, MasterCard, InterCity.

                          -  Lower Camel Case:
                          -  JavaScript programmers tend to use camel case that starts with a lowercase letter:
                          -  firstName, lastName, masterCard, interCity.

====================================================================================================================================================*/
var Aa8_$ = 100;
console.log(Aa8_$);

var $price = 100;
console.log($price);

var _price = 100;
console.log(_price);

// JavaScript is Case Sensitive => All JavaScript identifiers(name) are case sensitive. Like the variables lastName and lastname, are two different variables. JavaScript does not interpret LET or Let as the keyword let.
var lastName = "Doe";
var lastname = "Peterson";
console.log(lastName)
console.log(lastname)

/*====================================================================================================================================================
One Statement, Many Variables => 
                              - You can declare many variables in one statement. 
                              - Start the statement with var,let or const and separate the variables by comma.
====================================================================================================================================================*/
var person = "John Doe", carName = "Volvo", price = 200;
console.log(person);
console.log(carName);
console.log(price);

// A declaration can span multiple lines another way.
var person = "John Doe",
carName = "Volvo",
price = 200;
console.log(person)
console.log(carName)
console.log(price)

//Try now
var a,b,c; //Declare 3 variables
a = 5;     // Assign the value 5 to a
b = 10;    // Assign the value 10 to b
c = a + b; // Assign the sum of a and b to c
console.log(c);

// JavaScript White Space => JavaScript ignores multiple spaces. We can add white space to our script to make it more readable. The following lines are equivalent. A good practice is to put spaces around operators ( = + - * / ) Like --> let x = y + z;*/
var firstName =  'AHmed';
var lastName= 'HriDoy';
var emailAddress       =       'ahmedhridoy69@gmail.com';
console.log(firstName);
console.log(lastName);
console.log(emailAddress);

// JavaScript Arithmetic => As with algebra, you can do arithmetic with JavaScript variables, using operators like = and +
var x = 5 + 2 + 3;
console.log('The result of adding: ' + x);

// You can also add strings, but strings will be concatenated:
var x  = "John" + " " + "Doe";
console.log('The result of adding: ' + x);

// Also try this: If you put a number in quotes, the rest of the numbers will be treated as strings, and concatenated.
var x = "5" + 2 + 3;
console.log('The result of adding: ' + x); 

// Now try this:
var x = 2 + 3 + "5";
console.log('The result of adding: ' + x);

// =========================Example => var ================================== //  
// In this example, x, y, and z, are variables, declared with the var keyword.
var x = 5;
var y = 6;
var z = x + y;
console.log(z)

// =========================Example => let ================================== //  
// In this example, x, y, and z, are variables, declared with the let keyword.
let x = 5;
let y = 6;
let z = x + y;
console.log(z)

// =========================Example => const================================ //  
// In this example, price1, price2, and total, are variables, declared with the const keyword.
const price1 = 5;
const price2 = 6;
const total = price1 + price2;
console.log(total)

// =========================Example => undeclared(Using nothing)============================== //  
// In this example, x, y, and z, are undeclared (Using nothing) variables.
x = 5;
y = 6;
z = x + y;
console.log(z)

/*
//===============================================================================//
    From all the examples above, you can guess.
    x stores the value 5
    y stores the value 6
    z stores the value 11 // so what actually difference or work var,let & const. Follow the next lession.
//===============================================================================//
*/


