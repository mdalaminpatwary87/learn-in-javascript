// toUTCString() method converts a date to a UTC string (a date display standard).
var date = new Date();
console.log(date.toUTCString()); 

// toDateString() method converts a date to a more readable format:
var date = new Date();
console.log(date.toDateString());

// toISOString() method converts a Date object to a string, using the ISO standard format:
var d = new Date();
console.log(d.toISOString());

// toTimeString() method returns a string in the format "hh:mm:ss 
var date = new Date()
console.log(date.toTimeString()) 

/*====================================================================================================================================================
Date toLocaleTimeString() => 
toLocaleTimeString() method returns the time portion of a date object as a string, using locale conventions.
toLocaleTimeString() is an ECMAScript1 (ES1) feature.

Syntax
Date.toLocaleTimeString()

Technical Details:
Return Value:	A String, representing the time as a string
======================================================================================================================================================*/
var date = new Date();
var toLocaleTimeString = date.toLocaleTimeString();
console.log(toLocaleTimeString);