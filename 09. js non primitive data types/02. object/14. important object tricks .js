var person = {
    fname:"John", 
    lname:"Doe", 
    age:25
};
var keys = Object.keys(person);
var values = Object.values(person);
var keysValues = Object.entries(person);
console.log(keys);
console.log(values);
console.log(keysValues);


// object short hand
var x = 10;
var y = 2;
var z = x * y;
var person = {
    fname:"John", 
    lname:"Doe", 
    age:25,
    x : x,
    y : y,
    z : z
};

var person = {
    fname:"John", 
    lname:"Doe", 
    age:25,
    x,
    y,
    z
};
