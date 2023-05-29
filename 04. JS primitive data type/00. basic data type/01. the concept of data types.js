/*====================================================================================================================================================
The Concept of Data Types => JavaScript variables can hold different data types: numbers, strings, objects and more.
        var length = 16;                               // Number
        var lastName = "Johnson";                      // String
        var x = {firstName:"John", lastName:"Doe"};    // Object
Data types is an important concept.To be able to operate on variables, it is important to know something about the type. Without data types, a computer cannot safely solve this:
====================================================================================================================================================*/
var x = 16 + "Volvo";
console.log(x)
console.log(typeof x)
// ষোলতে "ভলভো" যোগ করার কি কোনো মানে হয়? এটি একটি ত্রুটি তৈরি করবে বা এটি একটি ফলাফল তৈরি করবে? জাভাস্ক্রিপ্ট নিজে থেকে উপরের উদাহরণটি যে হিসাবে বিবেচনা করবে:
var x = "16" + "Volvo"; // js convert from number to string , when we add number & string. return string. So When adding a number and a string, JavaScript will treat the number as a string.
console.log(x)
console.log(typeof x)

// similarly reverse same case 
var x = "Volvo" + 16; // JavaScript will treat the number as a string.
console.log(x)
console.log(typeof x)

// JavaScript evaluates expressions from left to right. Different sequences can produce different results:
var x = 16 + 4 + "Volvo"; // In this example, JavaScript treats 16 and 4 as numbers, until it reaches "Volvo".
console.log(x)
console.log(typeof x)

// similarly Different sequences can produce different results:
var x = "Volvo" + 16 + 4; // In this example, since the first operand is a string, all operands are treated as strings.
console.log(x)
console.log(typeof x)