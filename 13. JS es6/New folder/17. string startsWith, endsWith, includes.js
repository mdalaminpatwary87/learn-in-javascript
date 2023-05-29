/*====================================================================================================================================================
startsWith() => The startsWith() method returns true if a string starts with a specified string. Otherwise it returns false. The startsWith() method is case sensitive

Syntax: string.startsWith(searchValue, start)

Parameter	Description
searchValue	Required.The string to search for.
start	        Optional.
Start           position. Default is 0.
===================================================================================================================================================*/
var text = "Hello world, welcome to the universe.";
var result = text.startsWith("Hello");
console.log(result);

var text = "Hello world, welcome to the universe.";
console.log(text.startsWith("world"));    // Returns false

var text = "Hello world, welcome to the universe.";
var result = text.startsWith("Hello", 7);
console.log(result);

var text = "Hello world, welcome to the universe.";
console.log(text.startsWith("world", 5))  // Returns false

var text = "Hello world, welcome to the universe.";
console.log(text.startsWith("world", 6))    // Returns true

/*====================================================================================================================================================
endsWith() => The endsWith() method returns true if a string ends with a specified string. Otherwise it returns false. The endsWith() method is case sensitive.

Syntax: string.endsWith(searchvalue, length)

Parameter	Description
searchvalue	Required.The string to search for.
length	        Optional.The length of the string to search.Default value is the length of the string.
====================================================================================================================================================*/
var text = "Hello world";
var result =  text.endsWith("world");
console.log(result);

var text = "Hello World";
var result =  text.endsWith("world");
console.log(result);

var text = "Hello world, welcome to the universe.";
var result =  text.endsWith("world",11);
console.log(result);


/*====================================================================================================================================================
includes() => The includes() method returns true if a string contains a specified value. Otherwise it returns false. The includes() method is case sensitive.

Syntax: string.includes(searchvalue, start)
Parameter	            Description
searchvalue	            Required. The string to search for.
start	                    Optional.The position to start from. Default value is 0.
====================================================================================================================================================*/
// Check if a string includes "world":
var text = "Hello world, welcome to the universe.";
var result = text.includes("world");
console.log(result);

var text = "Hello World, welcome to the universe.";
var result = text.includes("world");
console.log(result);

// Check if a string includes "world". Start at position 12:
var text = "Hello World, welcome to the universe.";
var result = text.includes("world",12);
console.log(result);

var text = "Hello World, welcome world to the universe.";
var result = text.includes("world",12);
console.log(result);