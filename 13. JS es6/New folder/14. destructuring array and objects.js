/* 
    - Destructuring is a powerful feature in JavaScript that allows you to extract values from arrays or objects and assign them to variables using a concise syntax.
    - Array destructuring allows you to extract values from an array and assign them to variables with a simple syntax.
    - array destructuring
*/

/* 
    -
*/
var numbersArray = [1,2,3];


var numbersArray = [1,2,3];
var [num1,num2,num3] = numbersArray;
console.log(num1);
console.log(num2);
console.log(num3);

// if 2 =a, 6 = 5
var numbers = [1,2,3,4,5];
var [,a,,,b] = numbers;
console.log(a);
console.log(b);

// nested array
var numbers = [1,2,[3,100,500],4,6];
var [,,[,a,b]] = numbers;
console.log(a);
console.log(b);

// usecase
var a = 1;
var b = 2;
// old way
var temp = a;
a = b;
b = temp;
console.log(a,b);


// destructuring way
var a = 1;
var b = 2;
var [b,a] = [a,b];
console.log(a,b);


/* 
    -
*/
// object destructuring 
var user = {
    id :339,
    name :'Sakib',
    age : 35
}
// object theke name take ber kore ene arekta variable e assign korte chai jeno onno jaygay use korte pari.
var name = user['name'];
console.log(name); // old way

// destructuring way
var {name} = user;
console.log(name); 

// varivable change
var {name: title} = user;
console.log(title); 

// nested objets 
var user = {
    id :339,
    name :'Sakib',
    age : 35,
    education: {
        degree: 'Masters', 
    }   
}
var {education:{degree}} = user;
console.log(degree);

var user = {
    id :339,
    name :'Sakib',
    age : 35,
    education: {
        degree: 'Masters',
    }   
}
var {education:{degree:x}} = user;
console.log(x);