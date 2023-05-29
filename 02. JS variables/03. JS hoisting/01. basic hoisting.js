/*====================================================================================================================================================
Var Hoisting => Variables defined with var are hoisted to the top and can be initialized at any time. Meaning: You can use the variable before it is declared.
First steps  => hoisting kore upore niye ase, var carName ke. 
Second steps => carName = undefined (value take default value hisabe undefined kore rakhe. Tar variable er kono value pawya gele sei variable e value assign kore dey)
====================================================================================================================================================*/
carName = "Volvo";
var carName;
console.log(carName)

/*====================================================================================================================================================
Let Hoisting => Variables defined with let are also hoisted to the top of the block, but not initialized. Meaning: Using a let variable before it is declared will result in a ReferenceError.
First steps  => var er moto thiki hoisting kore upore niye ase, let carName ke. 
Second steps => sudu matro second kaaj taa kore na. 
====================================================================================================================================================*/
carName = "Volvo";
let carName;
console.log(carName) //ReferenceError: Cannot access 'carName' before initialization


/*====================================================================================================================================================
const Hoisting => Variables defined with const are also hoisted to the top, but not initialized. Meaning: Using a const variable before it is declared will result in a ReferenceError:
        carName = "Volvo";
        const carName;
        console.log(carName) //SyntaxError: Missing initializer in const declaration
====================================================================================================================================================*/

