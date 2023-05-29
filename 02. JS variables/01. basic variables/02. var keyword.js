/* 
When to Use JavaScript var =>
                            -  Always declare JavaScript variables with var,let, or const.
                            -  The var keyword is used in all JavaScript code from 1995 to 2015.
                            -  The let and const keywords were added to JavaScript in 2015.
                            -  If you want your code to run in older browser, you must use var.
*/

/*====================================================================================================================================================
Redeclaring variable => Redeclaring a JavaScript variable with var is allowed anywhere in a program.
                     -  If you re-declare a JavaScript variable declared with var, it will not lose its value.
====================================================================================================================================================*/
var x = 2;
var x;
console.log(x)

/*====================================================================================================================================================
Re-assign value      => Variables defined with var can be re-assign value. We can re-assign value a variable if we want but value is update(work value last time)...!                
                     -  If you re-declaring variable and re-assign values using var keyword. Variable value is update(work value last time)
====================================================================================================================================================*/
var x = 2;           // Here x is 2
var x = 0;           // Here x value of the variable Redeclared & re-assign value so now x is 0 from present to end of the code. If we not update next. If we update x = something then x value is change.  
console.log(x)       // Here x is 0