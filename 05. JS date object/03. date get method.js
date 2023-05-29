/*====================================================================================================================================================
JavaScript get date methods => These methods can be used for getting information from a date object.
    Method	                =>      Description
    getHours()	                    Get the hour (0-23)
    getMinutes()	                Get the minute (0-59)
    getSeconds()	                Get the second (0-59)
    getMilliseconds()	            Get the millisecond (0-999)
    getDate()	                    Get the day as a number (1-31)
    getMonth()	                    Get the month as a number (0-11)
    getFullYear()	                Get the year as a four digit number (yyyy)
    getTime()	                    Get the time (milliseconds since January 1, 1970)
    getDay()	                    Get the weekday as a number (0-6)

UTC Date Methods             =>     UTC date methods are used for working with UTC dates (Universal Time Zone dates).
    Method	                        Description
    getUTCHours()	                Same as getHours(), but returns the UTC hour
    getUTCMinutes()	                Same as getMinutes(), but returns the UTC minutes
    getUTCSeconds()	                Same as getSeconds(), but returns the UTC seconds
    getUTCMilliseconds()	        Same as getMilliseconds(), but returns the UTC milliseconds
    getUTCDate()	                Same as getDate(), but returns the UTC date
    getUTCMonth()	                Same as getMonth(), but returns the UTC month
    getUTCFullYear()	            Same as getFullYear(), but returns the UTC year
    getUTCDay()	                    Same as getDay(), but returns the UTC day
=====================================================================================================================================================*/
// getHours() => getHours() method returns the hours of a date as a number (0-23)
var date = new Date();
console.log(date.getHours());

// getMinutes() => getMinutes() method returns the minutes of a date as a number (0-59)
var date = new Date();
console.log(date.getMinutes());

// getSeconds() => getSeconds() method returns the seconds of a date as a number (0-59)
var date = new Date();
console.log(date.getSeconds());

// getMilliseconds() => getMilliseconds() method returns the milliseconds of a date as a number (0-999)
var date = new Date();
console.log(date.getMilliseconds());

// getDate() Method => getDate() method returns the day of a date as a number (1-31)
var date = new Date();
console.log(date.getDate());

// getMonth() => getMonth() method returns the month of a date as a number (0-11) . In JavaScript, the first month (January) is month number 0, so December returns month number 11.
var date = new Date();
console.log(date.getMonth());

// We can aslo use an array of names for month and getMonth() to return the month as a name.
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var date = new Date();
var month = months[date.getMonth()];
console.log(month);

// getFullYear() => getFullYear() method returns the year of a date as a four digit number
var date = new Date();
console.log(date.getFullYear());

// getTime() => getTime() method returns the number of milliseconds since January 1, 1970
var date = new Date();
console.log(date.getTime());

// getDay() => getDay() method returns the weekday of a date as a number (0-6) In JavaScript, the first day of the week (0) means "Sunday", even if some countries in the world consider the first day of the week to be "Monday"
var date = new Date();
console.log(date.getDay());

// We can aslo use an array of names, and getDay() to return the weekday as a name.
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var date = new Date();
var day = days[date.getDay()];
console.log(day);

// UTC date methods methods are used for working with UTC dates (Universal Time Zone dates)
var date = new Date();
console.log(date.getUTCHours());
console.log(date.getUTCMinutes());
console.log(date.getUTCSeconds());
console.log(date.getUTCMilliseconds());
console.log(date.getUTCDate())
console.log(date.getUTCMonth());
console.log(date.getUTCFullYear());
console.log(date.getUTCDay());