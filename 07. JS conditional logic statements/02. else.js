/*====================================================================================================================================================
else => else to specify a block of code to be executed, if the same condition is false.
        syntax => 
               if (condition) {
                   // block of code to be executed if the condition is true
               } else {
                   // block of code to be executed if the condition is false
               }
======================================================================================================================================================*/
// Example 01 => if,else
var a = 2;
var b = 2;
if (a < b){
    console.log(`${a} is smaller than ${b}`); // here dont'n executed it beacuse condition is false.
}else{
    console.log(`${a} is equal to ${b}`);     // here executed it beacuse if or above condition is false.
};