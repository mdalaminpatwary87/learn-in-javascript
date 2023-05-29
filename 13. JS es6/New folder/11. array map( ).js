/* 
    - map() method is a built-in function of arrays in JavaScript.
    -
*/
var numbers = [10,20,30,40,50];
var newNumbers = numbers.map(function(value){
    return value * value;
});
console.log(newNumbers); // return new array [ 1, 4, 9, 16, 25 ]. Remember that previous array can't change
console.log(numbers)    // originial array can not change

// Now solve this problem using arrow function 
var numbers = [1,2,3,4,5];
var newNumbers = numbers.map(x =>  x * x)
console.log(newNumbers); // return new array [ 1, 4, 9, 16, 25 ]. Remember that previous array can't change
console.log(numbers)    // originial array can not change

// another example 
var numbers = [1,2,3,4,5];
var newNumbers = numbers.map((num) => {
    return 2 * num;
});
console.log(newNumbers);
console.log(numbers); // originial array can not change

// more example 
var numbers = [1,2,3,4,5];
var newNumbers = numbers.map((n) => '<li>' + n + '</li>');
console.log(newNumbers);