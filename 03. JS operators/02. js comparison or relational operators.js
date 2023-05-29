// comparison or relational operators => In JavaScript, comparison operators are used to compare two values and return a boolean (true or false) based on the result of the comparison.   

// (==) equal to => The equality operator (==) checks if two values are equal in value but not necessarily in type. This is called "loose equality" or "type coercion".
        var x = 5;
        var y = 5;
        var z = 10;
        console.log(x == y);
        console.log(x == z);

// (===) equal value and equal type => The strict equality operator (===) checks if two values are equal in both value and type. This is called "strict equality".
        var x = 5;
        var y = 5;
        var z = "5";
        console.log(x === y);
        console.log(x === z);

// (!=) not equal => The inequality operator (!=) checks if two values are not equal in value. Like the equality operator, this is a loose equality check that does type coercion.
        var x = 5;
        var y = 10; 
        var z = 5;
        console.log(x != y);
        console.log(x != z);

// (!==) not equal value or not equal type => The strict inequality operator (!==) checks if two values are not equal in both value and type.
        var x = 5;
        var y = "10"; 
        var z = 5;
        console.log(x !== y);
        console.log(x !== z);

// (>) greater than  => The greater than operator (>) checks if the value on the left is greater than the value on the right.
        var x = 10;
        var y = 5;
        var z = 30;
        console.log(x > y);
        console.log(x > z);

// (>=) greater than or equal to => The greater than or equal to operator (>=) checks if the value on the left is greater than or equal to the value on the right.
        var x  = 30;
        var y  = 30;
        var z  = 10;
        var x1 = 50
        console.log(x >= y);
        console.log(x >= z);
        console.log(x >= x1);

// (<) less than => The less than operator (<) checks if the value on the left is less than the value on the right.
        var x = 10;
        var y = 20;
        var z = 5;
        console.log(x < y);
        console.log(x < z);

// (<=) less than or equal to => The less than or equal to operator (<=) checks if the value on the left is less than or equal to the value on the right.
        var x = 20;
        var y = 20;
        var z  = 30;
        var x1 = 10;
        console.log(x <= y);
        console.log(x <= z);
        console.log(x <= x1);