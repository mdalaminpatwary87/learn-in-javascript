// find even and odd number using js if..else conditional statements
var x = 12;
if (x % 2 === 0){
    console.log(x + ' is Even Number.');
}else{
    console.log(x + ' is Odd Number.');
};

// find even and odd number using js ternary operator
var x = 12;
var message = (x % 2 === 0) ? x + ' is Even Number.' : x + ' is Odd Number.';
console.log(message);

// here more example using js ternary operator
var age = 18;
var message = age >= 18 ? "You are an adult" : "You are not an adult yet";
console.log(message);