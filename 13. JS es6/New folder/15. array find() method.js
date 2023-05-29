/*====================================================================================================================================================
Array.prototype.find() or Array find() => 
                The find() method returns the value of the first element that passes a test.
                The find() method executes a function for each array element.
                The find() method returns undefined if no elements are found.
                The find() method does not execute the function for empty elements.
                The find() method does not change the original array.
Syntax: array.find(function(currentValue, index, arr),thisValue)

Parameters: 
function()	                Required. A function to run for each array element.
currentValue	            Required. The value of the current element.
index	                    Optional. The index of the current element.
arr	                        Optional. The array of the current element.
thisValue	                Optional. Default undefined.A value passed to the function as its this value.

Return Value: 
Type	                    Description
A value	                    The value of the first element that pass the test. Otherwise it returns undefined.
====================================================================================================================================================*/
var ages = [3, 10, 18, 20];
var checkAge = ages.find(function(currentValue){
    return currentValue > 18;
})
console.log(checkAge);

var ages = [3, 10, 18, 20];
var checkAge = ages.find(function(currentValue, index, arr){
    console.log(index);
    console.log(arr);
    return currentValue > 18;
})
console.log(checkAge);

// above the example solve using arrow function.
var ages = [3, 10, 18, 20];
var checkAge = ages.find((currentValue) => currentValue > 18 );
console.log(checkAge);

var ages = [3, 10, 18, 20];
var checkAge = ages.find(currentValue => currentValue > 18 );
console.log(checkAge);

// another example 
var array1 = [5, 12, 8, 130, 44];
var found = array1.find(element => element > 10);
console.log(found);

var numbers = [1,2,3,4,5,6,10];
var result = numbers.find(function(currentValue){
   return currentValue > 4;
});
console.log(result);

// thisValue => Default undefined. A value passed to the function as its this value.
class Student{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    test() {
        console.log('Hello World');
    }
    exampleFunction() {
        var array = [1,2,3];
        array.find(function() {
            this.test();
        },this);
    }
}
var student = new Student('HriDoy', 22);
student.exampleFunction();

// using arrow function
class Student{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    test() {
        console.log('Hello World');
    }
    exampleFunction() {
        var array = [1,2,3];
        array.find(() => {
            this.test();
        });
    }
}
var student = new Student('HriDoy', 22);
student.exampleFunction();
