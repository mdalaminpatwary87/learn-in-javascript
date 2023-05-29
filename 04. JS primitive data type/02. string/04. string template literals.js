/*====================================================================================================================================================
String Template Literals => Synonyms:
                                    Template Literals
                                    Template Strings
                                    String Templates
                                    Back-Tics Syntax
====================================================================================================================================================*/

/*====================================================================================================================================================
Back-Tics Syntax => Template Literals use back-ticks (``) rather than the quotes ("") to define a string. same as var text = "Hello World" but Back-Tics have more advantace. See bleow example.
====================================================================================================================================================*/
var text = `Hello World!`;
console.log(text);

/*====================================================================================================================================================
Quotes Inside Strings => With template literals, you can use both single and double quotes inside a string:
====================================================================================================================================================*/
var text = `He's often called "Johnny"`;
console.log(text); 

/*====================================================================================================================================================
Multiline Strings => Template literals allows multiline strings:
====================================================================================================================================================*/
var text =`The quick
brown fox
jumps over
the lazy dog`;
console.log(text);

/*====================================================================================================================================================
Interpolation => Template literals provide an easy way to interpolate variables and expressions into strings. The method is called string interpolation.
                 syntax is => ${...}


Variable Substitutions => Template literals allow variables in strings:
====================================================================================================================================================*/
var firstName = "John";
var lastName = "Doe";
var text = `Welcome ${firstName}, ${lastName}!`; // Automatic replacing of variables with real values is called string interpolation.
console.log(text);

/*====================================================================================================================================================
Expression Substitution => Template literals allow expressions in strings:
====================================================================================================================================================*/
var price = 10;
var VAT = 0.25;
var total = `Total: ${(price * (1 + VAT)).toFixed(2)}`; // Automatic replacing of expressions with real values is called string interpolation.
console.log(total);

// example 
var x = 10;
var y = 20;
console.log(`Here \nx is: ${x} \ny is: ${y} \nTotal is: ${x+y} `);
