/* 
    - 
*/


// Syntax => array.find(function(currentValue, index, arr),thisValue)
var numbers = [1,2,3,4,5,6,7,8,9,10]
var checkNumbers = numbers.filter((currentValue) => {
    return currentValue > 4; 
});
console.log(checkNumbers); 

var numbers = [1,2,3,4,5,6,7,8,9,10]
var checkNumbers = numbers.filter((currentValue) => currentValue > 4);
console.log(checkNumbers); 

// return new array
console.log(numbers); 
console.log(checkNumbers);