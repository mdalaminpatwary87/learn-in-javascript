/*====================================================================================================================================================
JavaScript Loops => Loops are handy, if you want to run the same code over and over again, each time with a different value.
for         => for statement creates a loop with 3 optional expressions.
               syntax =>
                   for (expression 1(initializer); expression 2(condition); expression 3(increment/decrement)) {
                    // all code here and code block to be executed
                   }
                Expression 1 is executed (one time) before the execution of the code block.
                Expression 2 defines the condition for executing the code block.
                Expression 3 is executed (every time) after the code block has been executed.
======================================================================================================================================================*/
/* 
Example Explation =>
                  - Expression 1 sets a variable before the loop starts (var i = 0).
                  - Expression 2 defines the condition for the loop to run (i must be less than 5).
                  - Expression 3 increases a value (i++) each time the code block in the loop has been executed.
*/
for (var i = 0; i < 5; i++){
    console.log(i);
  };
  
for (var i = 5; i > 0; i--){
    console.log(i);
}

for (var i = 5; i > 0; i--){
    console.log(i);
}

for (var i = 2; i <= 10; i+=2){ 
    console.log(i);
}

for (var i = 10; i > 0; i-=2){
    console.log(i);
}

var i = 100;
for (i = 100; i <= 1000; i += 100 ){
    console.log(i);
}

// more example using js for loop
var numbers = [1, 2, 3, 4, 5];
for (var i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
  };

/*====================================================================================================================================================
Expression 1 =>
             - Normally you will use expression 1 to initialize the variable used in the loop (let i = 0)
             - This is not always the case, JavaScript doesn't care. Expression 1 is optional.
             - You can initiate many values in expression 1 (separated by comma)
======================================================================================================================================================*/
var cars = ["BMW", "Volvo", "Saab", "Ford"];
for (var i = 0, len = cars.length; i < len; i++){
    console.log(i + ' -> ' + cars[i]);
};

// we can omit expression 1 (like when your values are set before the loop starts)
var cars = ["BMW", "Volvo", "Saab", "Ford"];
var i = 0;
var len = cars.length;
for (; i < len; i++){
    console.log(i + ' -> ' + cars[i]);
};

/*====================================================================================================================================================
Expression 2 =>
             - Often expression 2 is used to evaluate the condition of the initial variable.
             - This is not always the case, JavaScript doesn't care. Expression 2 is also optional.
             - If expression 2 returns true, the loop will start over again, if it returns false, the loop will end.
             - If you omit expression 2, you must provide a break inside the loop. Otherwise the loop will never end. 
======================================================================================================================================================*/
var cars = ["BMW", "Volvo", "Saab", "Ford"];
var i = 0;
for (; ; i++){
    if(i == cars.length){
        break;
    }else{
        console.log(i + ' -> ' + cars[i]);
    };
};

/*====================================================================================================================================================
Expression 3 =>
             - Often expression 3 increments the value of the initial variable.
             - This is not always the case, JavaScript doesn't care, and expression 3 is optional.
             - Expression 3 can do anything like negative increment (i--), positive increment (i = i + 15), or anything else.
             - Expression 3 can also be omitted (like when you increment your values inside the loop)
======================================================================================================================================================*/
var cars = ["BMW", "Volvo", "Saab", "Ford"];
var i = 0;
var len = cars.length;
for (; i < len;){
    console.log(i + ' ' + cars[i]);
    i++;
}

var cars = ["BMW", "Volvo", "Saab", "Ford"];
var i = 3;
for (; i >= 0; i--){
    console.log(i + ' ' + cars[i])
}

/*====================================================================================================================================================
Loop Scope => 
           - Using var in a loop:
                           var i = 5;
                           for (var i = 0; i < 10; i++) {
                               // some code
                           }
                           // Here i is 10

           - Using let in a loop:
                           let i = 5;
                           for (let i = 0; i < 10; i++) {
                                // some code
                           }
                           // Here i is 5
======================================================================================================================================================*/
// Using var in a loop
var i = 5; // Global Scope
for (var i = 0; i < 10; i++) { // block scope var i overwite global scope var i now i = 0. using var, the variable declared in the loop redeclares the variable outside the loop
  console.log(i);
}
console.log('This is global scope i = ' + i);

// Using let in a loop
let i = 5; // Global Scope
for (let i = 0; i < 10; i++) { // block scope let i is not overwite global scope let i. This rules is let.  using let, the variable declared in the loop does not redeclare the variable outside the loop. When let is used to declare the i variable in a loop, the i variable will only be visible within the loop.
  console.log(i);
}
console.log('This is global scope i = ' + i);