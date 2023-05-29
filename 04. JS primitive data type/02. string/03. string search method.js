/*====================================================================================================================================================
JavaScript String Search method => 
                                String indexOf()
                                String lastIndexOf()
                                String search()
                                String match()
                                String matchAll()
                                String includes()
                                String startsWith()
                                String endsWith()
====================================================================================================================================================*/

/*====================================================================================================================================================
indexOf() => The indexOf() method returns the index of (the position of) the first occurrence of a specified text in a string. JavaScript counts positions from zero. 0 is the first position in a string, 1 is the second, 2 is the third, ...
====================================================================================================================================================*/
var str = "Please locate where 'locate' occurs!";
console.log(str.indexOf('locate'));
console.log(str.indexOf('where'));
console.log(str.indexOf('Locate')); // case-sensative. That's why value not fined & return -1.
console.log(str.indexOf('how'));   // return -1. Beacuse how is not fined. 

// accept a second parameter as the starting position for the search:
var str = "Please locate where 'locate' occurs!";
console.log(str.indexOf("locate", 15));

/*====================================================================================================================================================
lastIndexOf() => The lastIndexOf() method returns the index of the last occurrence of a specified text in a string:
====================================================================================================================================================*/
var str = "Please locate where 'locate' occurs where!";
console.log(str.lastIndexOf("locate"));
console.log(str.lastIndexOf("where"));
console.log(str.lastIndexOf("John"));  //Both indexOf(), and lastIndexOf() return -1 if the text is not found.

// The lastIndexOf() methods searches backwards (from the end to the beginning), meaning: if the second parameter is 15, the search starts at position 15, and searches to the beginning of the string.
var str = "Please locate where 'locate' occurs!";
console.log(str.lastIndexOf("locate", 15));

/*====================================================================================================================================================
search() => The search() method searches a string for a specified value and returns the position of the match.

Did You Notice => 
            01. The two methods, indexOf() and search(), are equal?
            02. They accept the same arguments (parameters), and return the same value?
            03. The two methods are NOT equal. These are the differences:
                    01. The search() method cannot take a second start position argument.
                    02. The indexOf() method cannot take powerful search values (regular expressions).
====================================================================================================================================================*/
var str = "Please locate where 'locate' occurs!";
console.log(str.search("locate"));
console.log(str.search("Locate")); // return -1

var text1 = "Please locate where 'locate' occurs!";
var text2 = text1.search(/locate/);
console.log(text2);

/*====================================================================================================================================================
match()  => The match() method searches a string for a match against a regular expression, and returns the matches, as an Array object.
NoteDown => If a regular expression does not include the g modifier (to perform a global search), the match() method will return only the first match in the string.

Syntax: string.match(regexp)
        regexp	        Required. The value to search for, as a regular expression.
        Returns:	An Array, containing the matches, one item for each match, or null if no match is found
====================================================================================================================================================*/
// Perform a search for "ain":
var text = "The rain in SPAIN stays mainly in the plain";
var myArray = text.match("ain");
console.log(myArray);

// Perform a search for "ain":
var text = "The rain in SPAIN stays mainly in the plain";
var myArray = text.match(/ain/);
console.log(myArray);

// Perform a global search for "ain":
var text = "The rain in SPAIN stays mainly in the plain";
var myArray = text.match(/ain/g);
console.log(myArray);

// Perform a global, case-insensitive search for "ain":
var text = "The rain in SPAIN stays mainly in the plain";
var myArray = text.match(/ain/gi);
console.log(myArray);

var text = "The rain in SPAIN stays mainly in the plain";
var myArray = text.match(/o/);
console.log(myArray); // return null. 

/*====================================================================================================================================================
matchAll() => The matchAll() method returns an iterator containing the results of matching a string against a string (or a regular expression).
====================================================================================================================================================*/
var text = "I love cats. Cats are very easy to love. Cats are very popular.";
var iterator = text.matchAll("Cats");
console.log(Array.from(iterator));

// If the parameter is a regular expression, the global flag (g) must be set set, otherwise a TypeError is thrown.
var text = "I love cats. Cats are very easy to love. Cats are very popular.";
var iterator = text.matchAll(/Cats/g);
console.log(Array.from(iterator));

// If you want to search case insensitive, the insensitive flag (i) must be set:
var text = "I love cats. Cats are very easy to love. Cats are very popular.";
var iterator = text.matchAll(/Cats/gi);
console.log(Array.from(iterator));

