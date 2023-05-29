/*01: Use semicolons to end statements: 
        // Good
        var name = "John";
        console.log(name);

        // Bad
        var name = "John"
        console.log(name)
*/

/*02: Use descriptive variable and function names:
        // Good
        function calculateArea(width, height) {
            return width * height;
        }

        const rectangleWidth = 10;
        const rectangleHeight = 20;
        const rectangleArea = calculateArea(rectangleWidth, rectangleHeight);
        
        // Bad
        function calc(w, h) {
            return w * h;
        }
        
        const w = 10;
        const h = 20;
        const area = calc(w, h);
*/

/*03: Use const and let instead of var:
        // Good
        const name = "John";
        let age = 30;

        // Bad
        var name = "John";
        var age = 30;
*/

/*04: Avoid global variables:
        // Good
        function calculateArea(width, height) {
            const area = width * height;
            return area;
        }
        
        // Bad
        let area;
        function calculateArea(width, height) {
            area = width * height;
            return area;
        }
*/

/*05: Use strict mode:
        "use strict";

        function calculateArea(width, height) {
            const area = width * height;
            return area;
        }
*/

/*06: Use comments to explain complex code:
        function calculateArea(width, height) {
            // Calculate area using width and height
            const area = width * height;
            return area;
        }
*/

/*07: Use template literals instead of string concatenation:
        // Good
        const name = "John";
        const message = `Hello, ${name}!`;

        // Bad
        const name = "John";
        const message = "Hello, " + name + "!";
*/

/*07: Use template literals instead of string concatenation:
        // Good
        const name = "John";
        const message = `Hello, ${name}!`;

        // Bad
        const name = "John";
        const message = "Hello, " + name + "!";
*/

/*08: use camelCase for naming
        // Good
        const firstName = "John";
    
        // Bad
        const firstname = "John";
*/

/*09: variable declaration on top and initialize:
        // Good
        const firstName,lastName,userEmail,userPassword;

        firstName ='jhon';
        lastName  = 'Doe';
    
        // Bad
        const firstname = "John";
        console.log(firstname);
        
        const lastName  = 'Doe';
        console.log(lastName);
*/

/*10: avoid unnecessary variables:
        // Good
        function sayHello(name) {
            console.log("Hello, " + name + "!");
        }
        sayHello("John");
        
        // Bad
        function sayHello(name) {
            const message = "Hello, " + name + "!";
            console.log(message);
        }
        sayHello("John");
*/
/*11: Use const when you declare object and array*/
/*12: == vs ===*/
/*12: access dom less but traversing more*/
// It's a good programming practice to declare all variables at the beginning of a script.