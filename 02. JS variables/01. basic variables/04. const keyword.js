/* 
When to use javaScript const =>
                             -  The const keyword was introduced in ES6 (2015)
                             -  If you want a general rule: always declare variables with const
                             -  If you think the value of the variable can not change, use const
                             -  Variables defined with const cannot be Redeclared
                             -  Variables defined with const cannot be Reassigned
                             -  Variables defined with const have Block Scope
                             -  Use const when you declare:
                                                          - A new Array
                                                          - A new Object
                                                          - A new Function
                                                          - A new RegExp
*/

/*====================================================================================================================================================
Cannot be Redeclared & Reassigned => A const variable cannot be Redeclared reassigned.
        const PI = 3.141592653589793;
        const PI = 3.1416; // A const variable cannot be Redeclared

        const PI = 3.141592653589793;
        PI = 3.1416; // This will give an error. A const variable cannot be reassigned
        PI = PI + 10; // This will also give an error
====================================================================================================================================================*/

/*====================================================================================================================================================
Must be Assigned => JavaScript const variables must be assigned a value when they are declared.
        Correct
        const PI = 3.14159265359;

        Incorrect
        const PI;
        PI = 3.14159265359;
====================================================================================================================================================*/

/*====================================================================================================================================================
Constant Objects and Arrays => The keyword const is a little misleading. It does not define a constant value. It defines a constant reference to a value.
Because of this you can NOT =>
                        01. Reassign a constant value
                        02. Reassign a constant array
                        03. Reassign a constant object
But you CAN => 
                        01. Change the elements of constant array
                        02. Change the properties of constant object
====================================================================================================================================================*/
//Constant Arrays => You can change the elements of a constant array.
const cars = ["Saab", "Volvo", "BMW"]; // Create an Array:
console.log(cars)
cars[0] = "Toyota"; // Change an element.
console.log(cars)
cars.push("Audi"); // Add an element.
console.log(cars)

/*====================================================================================================================================================
But you can NOT reassign the array =>
        const cars = ["Saab", "Volvo", "BMW"];
        cars = ["Toyota", "Volvo", "Audi"];
        console.log(cars) // SyntaxError: Identifier 'cars' has already been declared
====================================================================================================================================================*/

//Constant Objects => You can change the properties of a constant object.
const car = {type:"Fiat", model:"500", color:"white"}; // Create an object.
console.log(car)
car.color = "red"; // Change a property.
console.log(car)
car.owner = "Johnson"; // Add a property.
console.log(car)
/*====================================================================================================================================================
But you can NOT reassign the object =>
        const car = {type:"Fiat", model:"500", color:"white"};
        car = {type:"Volvo", model:"EX60", color:"red"}; // SyntaxError: Identifier 'car' has already been declared
====================================================================================================================================================*/

/*====================================================================================================================================================
Block Scope => Declaring a variable with const is similar to let when it comes to Block Scope. The x declared in the block, in this example, is not the same as the x declared outside the block.
                const  x = 10; // Here x is 10
                {  
                const x = 2; // Here x is 2
                }
                // Here x is 10
====================================================================================================================================================*/
const  x = 10; // Here x is 10
if(true){
        const x = 2; // Here x is 2
        console.log(x)
}
console.log(x) // Here x is 10

/*====================================================================================================================================================
Redeclaring => Redeclaring a JavaScript var variable is allowed anywhere in a program.
        Example => 
                var x = 2;     // Allowed
                var x = 3;     // Allowed
                x = 4;         // Allowed
====================================================================================================================================================*/

/*====================================================================================================================================================
Redeclaring => Redeclaring an existing var or let variable to const, in the same scope, is not allowed:
        Example => 
                var x = 2;     // Allowed
                const x = 2;   // Not allowed

                {
                let x = 2;     // Allowed
                const x = 2;   // Not allowed
                }

                {
                const x = 2;   // Allowed
                const x = 2;   // Not allowed
                }
====================================================================================================================================================*/

/*====================================================================================================================================================
Redeclaring => Reassigning an existing const variable, in the same scope, is not allowed:
        Example => 
                const x = 2;     // Allowed
                x = 2;           // Not allowed
                var x = 2;       // Not allowed
                let x = 2;       // Not allowed
                const x = 2;     // Not allowed

                {
                const x = 2;   // Allowed
                x = 2;         // Not allowed
                var x = 2;     // Not allowed
                let x = 2;     // Not allowed
                const x = 2;   // Not allowed
                }
====================================================================================================================================================*/

/*====================================================================================================================================================
Redeclaring => Redeclaring a variable with const, in another scope, or in another block, is allowed:
        Example =>
                const x = 2;       // Allowed

                {
                const x = 3;   // Allowed
                }

                {
                const x = 4;   // Allowed
                } 
====================================================================================================================================================*/







































//=========================Example => const================================//  
// // In this example, price1, price2, and total, are variables
// const price1 = 5;
// const price2 = 6;
// let total = price1 + price2;
// console.log(total)
// /*The two variables price1 and price2 are declared with the const keyword.
// These are constant values and cannot be changed.
// The variable total is declared with the let keyword.
// This is a value that can be changed. */























        // //In this example, price1, price2, and total, are const variables:
        // const price1 = 5;
        // const price2 = 6;
        // const total = price1+price2
        // console.log(total)
        // document.getElementById("demo").innerHTML="The Total is: " + total;
