/*
    -  object literals
*/
function studentInfo(name,age,cgpa){
    return {
        name: name,
        age: age,
        cgpa: cgpa
    };
};
console.log(studentInfo("Hridoy",22,3.09));

/*
    - when we see object property and value name is same we can skip property name see below example same result above example
*/
function studentInfo(name,age,cgpa){
    return {
        name,
        age,
        cgpa
    };
};
console.log(studentInfo("Hridoy",22,3.09));

/* 
    - object function 
*/
var myObject = {
    body: function(){
        return "this is an object function";
    },
};
console.log(myObject.body())

/* 
    - object function easy using es6
*/
var myObject = {
    body(){
        return "this is an object function";
    },
};
console.log(myObject.body());