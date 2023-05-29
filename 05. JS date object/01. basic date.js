/*====================================================================================================================================================
Creating date objects in javascript => 
                                    -  Date objects are created with the new Date() constructor.
                                    -  There are 4 ways to create a new date object.
                                                                                   - new Date()
                                                                                   - new Date(year, month, day, hours, minutes, seconds, milliseconds)
                                                                                   - new Date(date string)
                                                                                   - new Date(milliseconds)
                                    - Recommended, the outputs see the browser console!
=====================================================================================================================================================*/
// creates a new date object with the current date and time using 'new Date()'
var date = new Date(); 
console.log(date);



// creates a new date object with specify year, month, day, hour, minute, second, and millisecond (in that order) using 'new Date(year, month, ...)'. In javaScript counts months from 0 to 11 like january = 0 and december = 11
var date = new Date(2018, 11, 24, 10, 33, 30);
console.log(date);

// specifying a month higher than 11, will not result in an error but add the overflow to the next year. Below example same as, var new Date(2019, 3, 24, 10, 33, 30);
var date = new Date(2018, 15, 24, 10, 33, 30); 
console.log(date);

// specifying a day higher than max (1-31), will not result in an error but add the overflow to the next month. Below example same as, var new Date(2018, 8, 1, 10, 33, 30);
var date = new Date(2018, 7, 32, 10, 33, 30);
console.log(date);

// ordering sytems for new Date(year, month, day, hours, minutes, seconds, milliseconds)
var date = new Date(2018, 11, 24, 10, 33, 30); // here, 6 numbers for specify orders year, month, day, hour, minute, second
var date = new Date(2018, 11, 24, 10, 33);     // here, 5 numbers for specify orders year, month, day, hour, and minute
var date = new Date(2018, 11, 24, 10);         // here, 4 numbers for specify orders year, month, day, and hour
var date = new Date(2018, 11, 24);             // here, 3 numbers for specify orders year, month, and day
var date = new Date(2018, 11);                 // here, 2 numbers for specify orders year and month
var date = new Date(2018);                     // return Jan 01 1970 because you cannot omit month. If you supply only one parameter it will be treated as milliseconds.
console.log(date);




// new Date(dateString) => new Date(date String) creates a new date object from a date string
var date = new Date("december 1, 2018 10:30:30"); // return Dec 01 2018 10:30:30
console.log(date);

var date = new Date("dec 1, 2018 10:30:30");     // return Dec 01 2018 10:30:30
console.log(date);




// previous century => one and two digit years will be interpreted as 19xx:
var date = new Date(99, 11, 1); // return Dec 01 1999
var date = new Date(98, 11, 1); // return Dec 01 1998
var date = new Date(71, 11, 1); // return Dec 01 1971
var date = new Date(9, 11, 24); // return Dec 01 1909
var date = new Date(1, 11, 24); // return Dec 01 1901
var date = new Date(0, 11, 24); // return Dec 01 1900
console.log(date);



// new Date(milliseconds) => new Date(milliseconds) creates a new date object as zero time plus and minus milliseconds. JavaScript stores dates as number of milliseconds since January 01, 1970, 00:00:00 UTC (Universal Time Coordinated).
var date = new Date(0);
console.log(date);

// 01 January 1970 plus 100 000 000 000 milliseconds is approximately 03 March 1973
var date = new Date(100000000000);
console.log(date);

// january 01 1970 minus 100 000 000 000 milliseconds is approximately October 31 1966
var date = new Date(- 100000000000);
console.log(date);

// one day (24 hours) is 86 400 000 milliseconds.
var date = new Date(86400000);
console.log(date);

// one day (24 hours) is minus 86 400 000 milliseconds.
var date = new Date(- 86400000);
console.log(date);

