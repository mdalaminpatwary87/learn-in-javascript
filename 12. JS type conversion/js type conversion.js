// Here are some examples of type conversion in JavaScript:

// 01 => String to Number conversion => In this example, the Number function is used to convert a string to a number. The string "42" is converted to the number 42, which is then assigned to the num variable.
var numString = "42";
var num = Number(numString);
console.log(num);
console.log(num +' type of: '+typeof(num));

// 02 => Number to String conversion => In this example, the String function is used to convert a number to a string. The number 42 is converted to the string "42", which is then assigned to the numString variable.
var num = 42;
var numString = String(num);
console.log(numString);
console.log(numString +' type of: '+typeof(numString));

// 03 => Boolean to Number conversion => In this example, the Number function is used to convert a boolean value to a number. The boolean value true is converted to the number 1, which is then assigned to the num variable.
var bool = true;
var num = Number(bool);
console.log(num);
console.log(num +' type of: '+typeof(num));

var bool = false;
var num = Number(bool);
console.log(num);
console.log(num +' type of: '+typeof(num));

// 04 => Number to Boolean conversion => In this example, the Boolean function is used to convert a number to a boolean value. The number 0 is converted to the boolean value false, which is then assigned to the bool variable.
var num = 0;
var bool = Boolean(num);
console.log(bool);
console.log(bool +' type of: '+typeof(bool));

var num = 1;
var bool = Boolean(num);
console.log(bool);
console.log(bool +' type of: '+typeof(bool));

// 05 => String to Boolean conversion => In this example, the Boolean function is used to convert a string to a boolean value. Any non-empty string is considered true, so the string "hello" is converted to the boolean value true, which is then assigned to the bool variable.
var str = "hello";
var bool = Boolean(str);
console.log(bool);
console.log(bool +' type of: '+typeof(bool));

var str = "";
var bool = Boolean(str);
console.log(bool);
console.log(bool +' type of: '+typeof(bool));

// 06 => Boolean to String conversion => In this example, the String function is used to convert a boolean value to a string. The boolean value true is converted to the string "true", which is then assigned to the str variable.
var bool = true;
var str = String(bool);
console.log(str);
console.log(str +' type of: '+typeof(str));

var bool = false;
var str = String(bool);
console.log(str);
console.log(str +' type of: '+typeof(str));

// 07 => String to Array conversion => In this example, the split method is used to convert a string to an array. The string "hello" is split into individual characters using the empty string "" as a separator, which creates an array containing the characters "h", "e", "l", "l", and "o".
var str = "hello";
var arr = str.split("");
console.log(arr); 
console.log(arr +' type of: '+typeof(arr));

// 08 => Array to String conversion => In this example, the join method is used to convert an array to a string. The array ["h", "e", "l", "l", "o"] is joined together using the empty string "" as a separator, which creates the string "hello".
var arr = ["h", "e", "l", "l", "o"];
var str = arr.join("");
console.log(str);
console.log(str +' type of: '+typeof(str));

// 09 => Number to String conversion with leading zeros => In this example, the toString method is used to convert a number to a string. The number 42 is converted to the string "42", which is then padded with leading zeros using the padStart method to create the string "0042"
let num = 42;
let str = num.toString().padStart(4, "0");
console.log(str);
console.log(str +' type of: '+typeof(str));

// 10 => String to Date conversion => In this example, the Date constructor is used to convert a string to a date object. The string "2022-02-20" is passed to the Date constructor, which creates a date object with the date set to February 20, 2022.
var str = "2022-02-20";
var date = new Date(str);
console.log(date); 
console.log(date +' type of: '+typeof(date)); // Outputs "Sun Feb 20 2022 00:00:00 GMT+0000 (Coordinated Universal Time)"

// 11 => Date to String conversion => In this example, the toDateString method is used to convert a date object to a string. The date object with the date set to February 20, 2022 is converted to the string "Sun Feb 20 2022".
var date = new Date("2022-02-20");
var str = date.toDateString();
console.log(str); 
console.log(str +' type of: '+typeof(str)); // Outputs "Sun Feb 20 2022"

// 12 => Object to JSON conversion => In this example, the JSON.parse method is used to convert a JSON string to an object. The JSON string "{"name":"John","age":30,"city":"New York"}" is converted to the object { name: "John", age: 30, city: "New York" }.
var obj = { name: "John", age: 30, city: "New York" };
var json = JSON.stringify(obj);
console.log(json); 
console.log(json +' type of: '+typeof(json)); 

// 13 => JSON to Object conversion => In this example, the JSON.parse method is used to convert a JSON string to an object. The JSON string "{"name":"John","age":30,"city":"New York"}" is converted to the object { name: "John", age: 30, city: "New York" }
var json = '{"name":"John","age":30,"city":"New York"}';
var obj = JSON.parse(json);
console.log(obj); 
console.log(obj.name +' type of: '+typeof(obj)); 

// 14 => String to Number with decimal places => n this example, the parseFloat function is used to convert a string to a number. The string "3.14" is converted to the number 3.14.
var str = "3.14";
var num = parseFloat(str);
console.log(num); 
console.log(num +' type of: '+typeof(num));


