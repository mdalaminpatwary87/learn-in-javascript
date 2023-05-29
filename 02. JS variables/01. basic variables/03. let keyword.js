/* 
When to use javaScript let  => If we think the value of the variable can change, use let.
JavaScript let Keyword info => 
                            - The let keyword was introduced in ES6 (2015)
                            - Variables defined with let cannot be Redeclared
                            - Variables defined with let can be Re-assign
                            - Variables defined with let must be declared before use
                            - Variables defined with let have Block Scope
*/

/*====================================================================================================================================================
Cannot be Redeclared => Variables defined with let cannot be redeclared. We cannot accidentally redeclare a variable. With let you can not do this...!
    let x = "John Doe";
    let x = 0; // SyntaxError: 'x' has already been declared
======================================================================================================================================================*/

/*====================================================================================================================================================
value of the variable can change(Re-assign value) => Variables defined with let the value of the variable can be change. We can re-assign(update) value of the variable
    let x = "John Doe";
    console.log(x) // Here x is John Doe.

    x = 100  //Here x value of the variable change now x is  100 from present to end of the code. If we not update next. If we update x = something then x value is change.  
    console.log(x) //Here x is 100
======================================================================================================================================================*/

/*====================================================================================================================================================
Block Scope => 
            - Before ES6 (2015), JavaScript had only Global Scope and Function Scope.
            - ES6 introduced two important new JavaScript keywords: let and const.
            - These two keywords provide Block Scope in JavaScript.
            - Variables declared inside a { } block cannot be accessed from outside the block.
            - Now question is what is global scope, function scope, block scope ?

            Here, 
                var x = 10;  // called global scope accessed from outside if we need use any place.  

                function sleep(){
                    let x = 200;    // called function scope accessed from outside when invoked(called) function name. if we need use any place.
                    console.log(x)
                }
                sleep();

                {
                    let x = 20; // called block scope. Variables declared inside a { } block cannot be accessed from outside the block.
                }
                // x can NOT be used here 
====================================================================================================================================================*/
let x = 100;
if(true){
    let x = 20;
    console.log(x) // return x = 20. Block Scope x & Global Scope x not same. Block Scope x work only block not work outside the block. 
}
console.log(x) // return x = 100

/*====================================================================================================================================================
Block Scope => Variables declared with the var keyword can NOT have block scope. Variables declared inside a { } block can be accessed from outside the block.
    {
      var x = 2;
    }
    x CAN be used here
=====================================================================================================================================================*/
var a = 100; 
if(true){
    var a = 20;
    console.log(a) // return a = 20
}
console.log(a) // return a = 20

/*====================================================================================================================================================
Redeclaring Variables =>
                       01. Redeclaring a variable using the var keyword can impose problems.
                       02. Redeclaring a variable inside a block will also redeclare the variable outside the block.
====================================================================================================================================================*/
var a = 500; // Here a is 500
if(true){
    var a = 600; //Here a is 600
    console.log(a)
}
console.log(a) //Here x is 600

/*====================================================================================================================================================
Redeclaring Variables => 
                        01. Redeclaring a variable using the let keyword can solve this problem.
                        02. Redeclaring a variable inside a block will not redeclare the variable outside the block.
====================================================================================================================================================*/
let b = 500; // Here a is 500
if(true){
    let b = 600; // Here a is 600
    console.log(b)
}
console.log(b) // Here x is 500

/*====================================================================================================================================================
Redeclaring => Redeclaring a JavaScript variable with var is allowed anywhere in a program:                
====================================================================================================================================================*/
var a = 2; // Now a is 2
var a = 3; // Now a is 3
console.log(a)

/*====================================================================================================================================================
Redeclaring => With let, redeclaring a variable in the same block is NOT allowed:   
          var x = 2;   // Allowed
          let x = 3;   // Not allowed

          {
          let x = 2;   // Allowed
          let x = 3;   // Not allowed
          }

          {
          let x = 2;   // Allowed
          var x = 3;   // Not allowed
          }   
====================================================================================================================================================*/

/*====================================================================================================================================================
Redeclaring => Redeclaring a variable with let, in another block, IS allowed:  
        let x = 2;   // Allowed

        {
        let x = 3;   // Allowed
        }

        {
        let x = 4;    // Allowed
        }  
====================================================================================================================================================*/