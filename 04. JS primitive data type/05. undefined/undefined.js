/*====================================================================================================================================================
Undefined => In JavaScript, a variable without a value, has the value undefined. The type is also undefined.
======================================================================================================================================================*/
var car;
console.log(car); // the value is return undefined

var car;
console.log(typeof car) // type is also undefined

/*====================================================================================================================================================
Any variable can be emptied, by setting the value to undefined. Then the Value is undefined, type will also be undefined.
======================================================================================================================================================*/
var car = 'BMW';
car = undefined; 
console.log(car); 

/*====================================================================================================================================================
Empty Values => An empty value has nothing to do with undefined. An empty string has both a legal value and a type.
======================================================================================================================================================*/
var car = "";  // The value is "", the typeof is "string"
console.log(car);
console.log(typeof car)

/*====================================================================================================================================================
Difference Between Undefined and Null => undefined and null are equal in value but different in type.
======================================================================================================================================================*/
console.log(null, typeof null);            // return object
console.log(undefined, typeof undefined);  // return undefined 

console.log(null == undefined);           // return true
console.log(null === undefined);          // return false 
