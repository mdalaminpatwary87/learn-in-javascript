/*
JavaScript Keywords => JavaScript keywords are reserved words. Reserved words cannot be used as names for variables. JavaScript keywords are used to identify actions to be performed. 
Here is a list of some of the keywords:
        Keyword	            Description
        var	       -        Declares a variable
        let	       -        Declares a block variable -> The let keyword tells the browser to create variables.
        const	   -        Declares a block constant
        if	       -        Marks a block of statements to be executed on a condition
        switch	   -        Marks a block of statements to be executed in different cases
        for        -    	Marks a block of statements to be executed in a loop
        function   -        Declares a function
        return	   -        Exits a function
        try	       -        Implements error handling to a block of statements
        Reserved Words Reference => https://www.w3schools.com/js/js_reserved.asp


    var return = 'Hello World'
    console.log(return) //Get Error, Because Reserved words cannot be used as names for variables. 
    
    
    var for = 50
    console.log(for)//Get Error, Because Reserved words cannot be used as names for variables. 
*/

// The let keyword tells the browser to create variables. 
let x = 5 + 6;
let y = x * 10;
console.log(y)
                                                              
// The var keyword also tells the browser to create variables. In these examples, using var or let will produce the same result.
var a = 5 + 6;
var b = a * 10;
console.log(b)
