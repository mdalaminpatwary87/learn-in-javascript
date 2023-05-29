/*====================================================================================================================================================
spread operator in javascript => 
                              - Spread operator is represented by three dots (...) and can be used in various contexts, such as function calls, array literals, and object literals.
======================================================================================================================================================*/
/*====================================================================================================================================================
function call => You can use the spread operator to pass the elements of an array as individual arguments to a function. 
In this example, we define a function called myFunction that takes three arguments. We define an array called numbers with three elements. 
We use the spread operator to pass the elements of the numbers array as individual arguments to the myFunction function
======================================================================================================================================================*/

function myFunction(x, y, z){
    return x + y + z;
  };
var numberArray = [1, 2, 3];
console.log(myFunction(...numberArray));

/* 
  - array literals using spread operator in javascript
*/
var numberArray1 = [1, 2, 3];
var numberArray2 = [4, 5, 6];
var numberArray3 = [7, 8, 9];
var sumNumberArray = [...numberArray1,...numberArray2,...numberArray3];
console.log(sumNumberArray);

/* 
  - Object literals we can use the spread operator to copy the properties of one object into another object
*/
var person1 = {
    name: "John",
    age: 30
  };
  
var person2 = {
    ...person1,
    gender: "male"
  };
console.log(person2);
  
// aslo work object
var person1 = {
  f:"John", 
  l:"Doe", 
  a:25
};

var person2 = {
  fname:"Don", 
  lname:"Doe", 
  age:30
};
console.log({...person1,...person2});
  



var numbers = [1,2,3];
var newNumbers = [numbers[0], numbers[1],numbers[2],4,5,6];
console.log(newNumbers);

var newNumbers = [...numbers,4,5,6];
console.log(newNumbers);


var numbers = [1,2,3];
var a = [...numbers]; // exact copy of numbers.
numbers.push(800);
console.log(numbers);  // change number
console.log(a); // can not change
 

// another example 
var numbers1 = [1,2,3];
var numbers2 = [10,20,30];

var numbers3 = [...numbers1,...numbers2];
console.log(numbers3);

