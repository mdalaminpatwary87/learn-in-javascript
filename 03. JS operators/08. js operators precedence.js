/*====================================================================================================================================================
Js operators precedence => Operator precedence describes the order in which operations are performed in an arithmetic expression.
                        -  PEMDAS: 
                                    - Parentheses() => When using parentheses, the operations inside the parentheses are computed first.
                                    - Exponents
                                    - Multiplication and Division (from left to right)
                                    - Addition and Subtraction (from left to right)
====================================================================================================================================================*/
// In this example return 250 but how to calculate this result? In  example the same as 150 * 3, or is it the same as 100 + 150? Is the addition or the multiplication done first?
// As in traditional school mathematics, the multiplication is done firthisst. Multiplication (*) and division (/) have higher precedence than addition (+) and subtraction (-). 
var x = 100 + 50 * 3;
console.log(x); 
// And (as in school mathematics) the precedence can be changed by using parentheses:
var a = (100 + 50) * 3;
console.log(a) // reture 450

// When many operations have the same precedence (like addition and subtraction), they are computed from left to right:
var a = 100 + 50 - 3;
console.log(a) // reture 147

/* 
    Reference Link:
                  - https://www.w3schools.com/js/js_precedence.asp
*/