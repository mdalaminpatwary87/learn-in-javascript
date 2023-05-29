/*====================================================================================================================================================
else if => else if to specify a new condition to test, if the first condition is false.
           syntax => 
                  if (condition1) {
                      // block of code to be executed if condition1 is true
                  } else if (condition2) {
                      // block of code to be executed if the condition1 is false and condition2 is true
                  } else {
                      // block of code to be executed if the condition1 is false and condition2 is false
                  }
======================================================================================================================================================*/
// Example 01 => if,else if,else
var a = 2;
var b = 2;
if (a < b){
    console.log(`${a} is smaller than ${b}`); // here dont'n executed it beacuse condition1 is false.
}else if(a === b){
    console.log(`${a} is equal to ${b}`);     // executed it beacuse condition1 is false and condition2 is true.
}else{
    console.log(`${a} is gather than ${b}`);  // dont'n executed it.
};