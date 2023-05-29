/*====================================================================================================================================================
JavaScript date formate => There are generally 3 types of JavaScript date input formats:
   
    Type	                Example
    ISO Date	            "2015-03-25" (The International Standard)
    Short Date	            "03/25/2015"
    Long Date	            "Mar 25 2015" or "25 Mar 2015"

Note => 
    01. The ISO format follows a strict standard in JavaScript.
    02. he other formats are not so well defined and might be browser specific.

JavaScript Date Output =>
    We alreday know Independent of input format, JavaScript will (by default) output dates in full text string format. Like: Wed Aug 24 2022 19:09:32 GMT+0600 (Bangladesh Standard Time)
=====================================================================================================================================================*/




/*====================================================================================================================================================
JavaScript ISO Dates => 
                     - ISO 8601 is the international standard for the representation of dates and times
                     - The ISO 8601 syntax (YYYY-MM-DD) is also the preferred JavaScript date format
                     - Date and time is separated with a capital T.
                     - UTC time is defined with a capital letter Z.
=====================================================================================================================================================*/
var date = new Date("2015-03-25");
console.log(date);

// ISO Dates (Year and Month) => ISO dates can be written without specifying the day (YYYY-MM)
var date = new Date("2015-03");
console.log(date);

// ISO Dates (Only Year) => ISO dates can be written without month and day (YYYY)
var date = new Date("2015");
console.log(date);

// ISO Dates (Date-Time) => ISO dates can be written with added hours, minutes, and seconds (YYYY-MM-DDTHH:MM:SSZ):
var date = new Date("2015-03-25T12:30:20Z");
console.log(date);

// If you want to modify the time relative to UTC, remove the Z and add +HH:MM or -HH:MM instead:
var d = new Date("2015-03-25T12:00:00-06:30");
console.log(d)

// Note: UTC (Universal Time Coordinated) is the same as GMT (Greenwich Mean Time). Omitting T or Z in a date-time string can give different results in different browsers.





/*====================================================================================================================================================
Time Zones =>
When setting a date, without specifying the time zone, JavaScript will use the browser's time zone.
When getting a date, without specifying the time zone, the result is converted to the browser's time zone.
In other words: If a date/time is created in GMT (Greenwich Mean Time), the date/time will be converted to CDT (Central US Daylight Time) if a user browses from central US.
======================================================================================================================================================*/






/*====================================================================================================================================================
JavaScript Short Dates => Short dates are written with an "MM/DD/YYYY" syntax like this:
======================================================================================================================================================*/
var d = new Date("03/25/2015");
console.log(d)

//---------------WARNINGS !--------------->
// In some browsers, months or days with no leading zeroes may produce an error.
var d = new Date("2015-3-25");
console.log(d)

// The behavior of "YYYY/MM/DD" is undefined. Some browsers will try to guess the format. Some will return NaN.
var d = new Date("2015/03/25");
console.log(d)

// The behavior of  "DD-MM-YYYY" is also undefined. Some browsers will try to guess the format. Some will return NaN.
var d = new Date("25-03-2015");
console.log(d)





// Javascript long dates => Long dates are most often written with a "MMM DD YYYY" syntax like this:
var date = new Date("Mar 25 2023");               // MMM DD YYYY syntax for js long dates
var date = new Date("25 Mar 2023");               // month and day can be in any order
var date = new Date("January 25 2023");           // month can be written in full (January or january), or abbreviated (Jan or jan), or capital letter (JANUARY)
var date = new Date("Jan, 25, 2023");             // Commas are ignored.
var date = new Date("december 1, 2023 10:30:30"); // return Dec 01 2023 10:30:30
console.log(date);





// Date input with parsing dates => If you have a valid date string, you can use the Date.parse() method to convert it to milliseconds. Date.parse() returns the number of milliseconds between the date and January 1, 1970:
var msec = Date.parse("Feb 25, 2023");
console.log(msec);  // return 1677261600000

// we can use the number of milliseconds to convert it to a date object
var msec = Date.parse("Feb 25, 2023");
var date = new Date(msec);
console.log(date);  // return Feb 25, 2023