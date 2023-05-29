/*====================================================================================================================================================
Number Properties => 
    Property	            Description
    MAX_VALUE	            Returns the largest number possible in JavaScript
    MIN_VALUE	            Returns the smallest number possible in JavaScript
    POSITIVE_INFINITY	    Represents infinity (returned on overflow)
    NEGATIVE_INFINITY	    Represents negative infinity (returned on overflow)
    NaN	                    Represents a "Not-a-Number" value
    MAX_SAFE_INTEGER        Represents the maximum safe integer in JavaScript.
    MIN_SAFE_INTEGER        Represents the minimum safe integer in JavaScript.

NoteDown => Number Properties Cannot be Used on Variables. 
            Number properties belong to the JavaScript Number Object. 
            These properties can only be accessed as Number.property like (Number.MAX_VALUE)
            Using x.MAX_VALUE, where x is a variable or a value, will return undefined. 
            
            var x = 5;
            console.log(x.MAX_VALUE); // return undefined
====================================================================================================================================================*/
// Number.MAX_VALUE is a constant representing the largest possible number in JavaScript.
var x = Number.MAX_VALUE;
console.log(x);

// Number.MIN_VALUE is a constant representing the lowest possible number in JavaScript.
var x = Number.MIN_VALUE;
console.log(x);

// POSITIVE_INFINIT
var x = Number.POSITIVE_INFINITY;
console.log(x)

var x = 1 / 0;
console.log(x);

// NEGATIVE_INFINITY
var x = Number.NEGATIVE_INFINITY;
console.log(x);

var x = -1 / 0;
console.log(x);

// NaN - Not a Number. NaN is a JavaScript reserved word indicating that a number is not a legal number.
var x = Number.NaN  // we can write it var x = NaN; This two ways is correct.
console.log(x);

// Trying to do arithmetic with a non-numeric string will result in NaN (Not a Number)
var x = 100 / "Apple"; 
console.log(x);

/*====================================================================================================================================================
isNaN() => The Number.isNaN() method returns true if the value is NaN, and the type is a Number.
====================================================================================================================================================*/
var x = 100;
var text = Number.isNaN(x);
console.log(text);

var x = 100 * 'Hello';
var text = Number.isNaN(x);
console.log(text);

/*====================================================================================================================================================
Difference Between isnan() and Number.isnan() => 
        isNaN() method returns true if a value is Not-a-Number. isNaN() converts the value to a number before testing it.
        Number.isNaN() returns true if a number is Not-a-Number.
====================================================================================================================================================*/
var text1 = "Hello";
var text2 = isNaN(text1);
console.log(text2);

var text1 = "Hello";
var text2 = Number.isNaN(text1);
console.log(text2);

var text1 = 10 - "Hello";
var text2 = Number.isNaN(text1);
console.log(text2);

/*====================================================================================================================================================
Number.MAX_SAFE_INTEGER
====================================================================================================================================================*/
var x = Number.MAX_SAFE_INTEGER;
console.log(x);

/*====================================================================================================================================================
Number.MAX_SAFE_INTEGER
====================================================================================================================================================*/
var x = Number.MIN_SAFE_INTEGER;
console.log(x);

/*====================================================================================================================================================
Number.isFinite() Method => The Number.isFinite() method returns true if a number is a finite number. Otherwise it returns false. 
====================================================================================================================================================*/
var x = 100;
console.log(Number.isFinite(x)); // return true
console.log(Number.isFinite(Infinity)); // return false 
console.log(Number.isFinite(1.7976931348623157e+308)); // return true js number MAX_VALUE
console.log(Number.isFinite(1.7976931348623157e+309)); // return false 


/*====================================================================================================================================================
FUTURE TOPICS:  
Number EPSILON, Number constructor, Number prototype, 
====================================================================================================================================================*/
