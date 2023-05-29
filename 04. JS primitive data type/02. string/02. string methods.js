/*====================================================================================================================================================
JavaScript String Methods => String methods help you to work with strings. All string methods return a new string. They don't modify the original string. Formally said: Strings are immutable: Strings cannot be changed, only replaced.

String Methods and Properties =>  
                                Primitive values, like "John Doe", cannot have properties or methods (because they are not objects).
                                But with JavaScript, methods and properties are also available to primitive values, because JavaScript treats primitive values as objects when executing methods and properties.
====================================================================================================================================================*/

/*====================================================================================================================================================
Length => The length property returns the length of a string.
====================================================================================================================================================*/
var x = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
console.log(x.length);

/*====================================================================================================================================================
Extracting String Parts => There are 3 methods for extracting a part of a string:
                           01. slice(start, end)
                           02. substring(start, end)
                           03. substr(start, length)
NoteDown => JavaScript counts positions from zero. First position is 0. Second position is 1.         
====================================================================================================================================================*/

/*====================================================================================================================================================
slice() =>
            slice() extracts a part of a string and returns the extracted part in a new string. 
            The method takes 2 parameters: the start position, and the end position (end not included).
====================================================================================================================================================*/
// Slice out a portion of a string from position 7 to position 13 (13 not included):
var str = "Apple, Banana, Kiwi";
var part = str.slice(7, 13);
console.log(part);

// If a parameter is negative, the position is counted from the end of the string. This example slices out a portion of a string from position -12 to position -6 (-6 not included):
var str = "Apple, Banana, Kiwi";
var part = str.slice(-12, -6);
console.log(part);

// If you omit the second parameter, the method will slice out the rest of the string:
var str = "Apple, Banana, Kiwi";
var part = str.slice(7);
console.log(part);

// Similarly counting from the end:
var str = "Apple, Banana, Kiwi";
var part = str.slice(-12);
console.log(part);

/*====================================================================================================================================================
substring() => 
            substring() extracts a part of a string and returns the extracted part in a new string.
            substring() is similar to slice(). Takes 2 parameters: the start position, and the end position (end not included).
            The difference is that substring() cannot accept negative indexes.
====================================================================================================================================================*/
var str = "Apple, Banana, Kiwi";
var part = str.substring(7,13);
console.log(part); 

// If you omit the second parameter, substring() will slice out the rest of the string.
var str = "Apple, Banana, Kiwi";
var part = str.substring(7);
console.log(part);

/*====================================================================================================================================================
substr() => 
            substr() extracts a part of a string and returns the extracted part in a new string.
            substr() is similar to slice(). 
            The difference is that the second parameter specifies the length of the extracted part.
====================================================================================================================================================*/
var str = "Apple, Banana, Kiwi";
var part = str.substr(7, 6);
console.log(part);

var str = "Apple, Banana, Kiwi";
var part = str.substr(-12, 6);
console.log(part);

// If you omit the second parameter, substr() will slice out the rest of the string.
var str = "Apple, Banana, Kiwi";
var part = str.substr(7);
console.log(part);

// If the first parameter is negative, the position counts from the end of the string.
var str = "Apple, Banana, Kiwi";
var part = str.substr(-4);
console.log(part)

/*====================================================================================================================================================
replace() => The replace() method replaces a specified value with another value in a string.

NoteDown =>
            01. The replace() method does not change the string it is called on.
            02. The replace() method returns a new string.
            03. By default, The replace() method replaces only the first match
            04. If you want to replace all matches, use a regular expression with the /g flag set.
====================================================================================================================================================*/
var text = "Please visit Microsoft!";
var newText = text.replace("Microsoft", "W3Schools");
console.log(newText);

// The replace() method does not change the string it is called on.
var text = "Please visit Microsoft!";
var newText = text.replace("Microsoft", "W3Schools");
console.log(text) // not change originial string 
console.log(newText);

// The replace() method returns a new string.
var text = "Please visit Microsoft!";
var newText = text.replace("Microsoft", "W3Schools");
console.log(text) // originial string 
console.log(newText) //returns a new string.

// The replace() method replaces only the first match
var text = "Please visit Microsoft! and  Microsoft ";
var newText = text.replace("Microsoft", "W3Schools");
console.log(text); // originial string
console.log(newText); //returns a new string.

// By default, the replace() method is case sensitive. Writing MICROSOFT (with upper-case) will not work:
var text = "Please visit Microsoft!";
var newText = text.replace("MICROSOFT", "W3Schools");
console.log(newText);

// To replace case insensitive, use a regular expression with an /i flag (insensitive):
var text = "Please visit Microsoft!";
var newText = text.replace(/MICROSOFT/i, "W3Schools"); // Regular expressions are written without quotes
console.log(newText);

// To replace all matches, use a regular expression with a /g flag (global match):
var text = "Please visit Microsoft and Microsoft!";
var newText = text.replace(/Microsoft/g, "W3Schools");
console.log(text); // originial string
console.log(newText); //returns a new string.

/*====================================================================================================================================================
replaceAll() => In 2021, JavaScript introduced the string method replaceAll(). replaceAll() is an ES2021 feature.
====================================================================================================================================================*/
var text = "I love cats. Cats are very easy to love. Cats are very popular";
var text = text.replaceAll("Cats","Dogs");
var text = text.replaceAll("cats","dogs");
console.log(text);

// The replaceAll() method allows you to specify a regular expression instead of a string to be replaced.
var text = "I love cats. Cats are very easy to love. Cats are very popular";
var text = text.replaceAll(/Cats/g,"Dogs");
var text = text.replaceAll(/cats/g,"dogs");
console.log(text);

/*====================================================================================================================================================
Converting to Upper and Lower Case =>
                                01. A string is converted to upper case with toUpperCase():
                                02. A string is converted to lower case with toLowerCase():
====================================================================================================================================================*/
// Converting toUpperCase()
var text1 = "Hello World!";
var text2 = text1.toUpperCase();
console.log(text2);


// ConvertingtoLowerCase()
var text1 = "HeLLo WORld!"; 
var text2 = text1.toLowerCase();  
console.log(text2);

/*====================================================================================================================================================
concat() => 
            joins two or more strings:
            The concat() method can be used instead of the plus operator. These two lines do the same:
            var text = "Hello" + " " + "World!";
            var text = "Hello".concat(" ", "World!");
====================================================================================================================================================*/
var text1 = "Hello";
var text2 = "World";
var text3 = text1.concat(" ", text2);
console.log(text3);

var text1 = "Hello";
var text2 = "World";
var local = "Bangladesh";
var text3 = text1.concat(" ", text2,' ', local);
console.log(text3);

/*====================================================================================================================================================
trim() => The trim() method removes whitespace from both sides of a string:
====================================================================================================================================================*/
var text1 = "      Hello World!      ";
var text2 = text1.trim();
console.log(text2);

/*====================================================================================================================================================
trimStart() => ECMAScript 2019 added the String method trimStart() to JavaScript. The trimStart() method works like trim(), but removes whitespace only from the start of a string.
====================================================================================================================================================*/
var text1 = "      Hello World!      ";
var text2 = text1.trimStart();
console.log(text2);

/*====================================================================================================================================================
trimEnd() => ECMAScript 2019 added the String method trimEnd() to JavaScript. The trimEnd() method works like trim(), but removes whitespace only from the end of a string.
====================================================================================================================================================*/
var text1 = "      Hello World!      ";
var text2 = text1.trimEnd();
console.log(text2);

/*====================================================================================================================================================
padStart() => The padStart() method pads a string with another string

NoteDown =>
        01. The padStart() method is a string method.
        02. To pad a number, convert the number to a string first.
====================================================================================================================================================*/
var text = "5"; // now this string lenght is 1. But i want to increase this lenght 4 or any but how? this problem solve padStart(), & padEnd(), first parameter define how lenght increase, 2nd paramenter ki diye sei jayga ta fill korbo.
var pad = text.padStart(4,"x");
console.log(pad);

var text = "5";
var pad = text.padStart(4,"0");
console.log(pad);

// The padStart() method is a string method. To pad a number, convert the number to a string first.
var numb = 5;
var text = numb.toString();
var pad = text.padStart(4,"0");
console.log(pad);

/*====================================================================================================================================================
padEnd() => The padEnd() method pads a string with another string:

NoteDown => 
        01. The padEnd() method is a string method.
        02. To pad a number, convert the number to a string first.
====================================================================================================================================================*/
var text = "5";
var pad = text.padEnd(4,"x");
console.log(pad);

var text = "5";
var pad = text.padEnd(4,"0");
console.log(pad);

// The padEnd() method is a string method. To pad a number, convert the number to a string first.
var numb = 5;
var text = numb.toString();
var pad = text.padEnd(4,"0");
console.log(pad);

/*====================================================================================================================================================
Extracting String Characters => There are 3 methods for extracting string characters:
                            01. charAt(position)
                            02. charCodeAt(position)
                            03. Property access [ ]
====================================================================================================================================================*/

/*====================================================================================================================================================
charAt() => The charAt() method returns the character at a specified index (position) in a string.
====================================================================================================================================================*/
var text = "HELLO WORLD";
var char = text.charAt(0);
console.log(char);

/*====================================================================================================================================================
charCodeAt() => The charCodeAt() method returns the unicode of the character at a specified index in a string.The method returns a UTF-16 code (an integer between 0 and 65535).
====================================================================================================================================================*/
var text = "HELLO WORLD";
var char = text.charCodeAt(0);
console.log(char);

/*====================================================================================================================================================
Property Access [] => ECMAScript 5 (2009) allows property access [ ] on strings:

NoteDown => Property access might be a little unpredictable:
            01. It makes strings look like arrays (but they are not)
            02. If no character is found, [ ] returns undefined, while charAt() returns an empty string.
            03. It is read only. str[0] = "A" gives no error (but does not work!)
====================================================================================================================================================*/
var text = "HELLO WORLD";
var char = text[0];
console.log(char);

// It is read only. str[0] = "A" gives no error (but does not work!)
var text = "HELLO WORLD";
text[0] = "A"; // Gives no error, but does not work
console.log(text); 

/*====================================================================================================================================================
Converting a String to an Array => If you want to work with a string as an array, you can convert it to an array.


split() => A string can be converted to an array with the split() method
====================================================================================================================================================*/
var text = "a,b,c,d,e,f";
var myArray = text.split(",");
console.log(myArray);
console.log(myArray[0]); // access array index 0

var text = "Hello World";
var myArray = text.split(" ");
console.log(myArray);
console.log(myArray[0]) // access array 

var text = "Hello|World|Bangladesh";
var myArray = text.split("|");
console.log(myArray);
console.log(myArray[0]); // access array  




