/*====================================================================================================================================================
switch statement    => switch statement is used to perform different actions based on different conditions.Use the switch statement to select one of many code blocks to be executed.
                       syntax =>    
                              switch(expression) {
                              case x:
                                  // code block
                                  break;
                              case y:
                                  // code block
                                  break;
                              default:
                                  // code block
                              }
break keyword        =>
                     - When JavaScript reaches a break keyword, it breaks out of the switch block.
                     - This will stop the execution inside the switch block.
                     - It is not necessary to break the last case in a switch block. The block breaks (ends) there anyway.
                     - If you omit the break statement, the next case will be executed even if the evaluation does not match the case.

default Keyword      => 
                     - The default keyword specifies the code to run if there is no case match.
                     - The default keyword not necessary write break keyword if default keyword write last of the switch statement.
                     - The default case does not have to be the last case in a switch block. if you put this first or middle possition must be use break keyword

This is how it works => 
                     - The switch expression is evaluated once.
                     - The value of the expression is compared with the values of each case.
                     - If there is a match, the associated block of code is executed.
                     - If there is no match, the default code block is executed.

Switching Details    =>
                     - If multiple cases matches a case value, the first case is selected.
                     - If no matching cases are found, the program continues to the default label.
                     - If no default label is found, the program continues to the statement(s) after the switch.
======================================================================================================================================================*/
// Example 01 => switch statement
var grade = 'A';
switch (grade) {
    case 'A':
        console.log("Good job");
        break;

    case 'B':
        console.log("Pretty good");
        break;

    case 'C':
        console.log("Passed");
        break;

    case 'D':
        console.log("Not so good");
        break;

    case 'F':
        console.log("Failed");
        break;

    default:
        console.log("Unknown grade");
};

// default case does not have to be the last case in a switch block. But if you write this first or middle possition must be use break keyword.
var grade = 'F';
switch (grade) {
    default:
        console.log("Unknown grade");
        break;

    case 'A':
        console.log("Good job");
        break;

   case 'B':
    console.log("Pretty good");
    break;

    case 'C':
        console.log("Passed");
        break;

    case 'D':
        console.log("Not so good");
        break;

    case 'F':
        console.log("Failed");
};

// Common Code Blocks => Sometimes you will want different switch cases to use the same code.
var grade = 'A';
switch (grade) {
    case 'A': 
    case 'B': 
    case 'C':
        console.log("Pretty good");
        break;
   case 'D': 
   console.log("Not so good");
   break;

   case 'F': 
   console.log("Failed");
   break;

   default:  
   console.log("Unknown grade");
};

/*====================================================================================================================================================
Strict comparison with switch statement =>
                                        - Switch cases use strict comparison (===)
                                        - The values must be of the same type to match
                                        - A strict comparison can only be true if the operands are of the same type
======================================================================================================================================================*/
// In this example there will be match for x
var x = 0;
switch (x){
  case 0:
    console.log("Off");
    break;

  case 1:
    console.log("On");
    break;

  default:
    console.log("No value found");
};

// In this example there will be no match for x
var x = "0";
switch (x){
  case 0:
    console.log("off");
    break;

  case 1:
    console.log("on");
    break;

  default:
    console.log("No value found");
};