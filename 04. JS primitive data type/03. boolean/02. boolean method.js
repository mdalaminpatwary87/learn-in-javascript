/*====================================================================================================================================================
The Boolean value of false is (you guessed it) falsetoString() => The toString() method returns a boolean as a string.
======================================================================================================================================================*/
var bool = true;
var text = bool.toString();
console.log(typeof text);

/*====================================================================================================================================================
valueOf() => Returns the primitive value of a boolean. valueOf() is usually called by JavaScript behind the scenes, and not explicitly in code.
======================================================================================================================================================*/
var bool = false;
var text = bool.valueOf();
console.log(text);
console.log(typeof text); // return boolean
