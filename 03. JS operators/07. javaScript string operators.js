/*====================================================================================================================================================
JavaScript String Operators => The + operator can also be used to add (concatenate) strings.
====================================================================================================================================================*/
var firstName = "John";
var lastName = "Doe";
var firstNameLastName = firstName + ' ' + lastName;
console.log(firstNameLastName)

//The += assignment operator can also be used to add (concatenate) strings:
var text1 = "What a very ";
text1 += "nice day";
console.log(text1) // When used on strings, the + operator is called the concatenation operator.

/*====================================================================================================================================================
Adding Strings and Numbers => Adding two numbers, will return the sum, but adding a number and a string will return a string.
If you add a number and a string, the result will be a string!
====================================================================================================================================================*/
var x = 5 + 5;
var y = "5" + 5;
var z = "Hello" + 5;
var a =  5 + 5 + '69';
console.log(x)
console.log(y)
console.log(z)
console.log(a) // If you add a number and a string, the result will be a string!
console.log(typeof a) // If you add a number and a string, the result will be a string!