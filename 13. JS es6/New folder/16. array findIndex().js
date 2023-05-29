/*====================================================================================================================================================
Array.prototype.findIndex() or Array findIndex() => 

Syntax => array.findIndex(function(currentValue, index, arr), thisValue)
====================================================================================================================================================*/
var ages = [3, 10, 18, 20];
var checkAge = ages.findIndex(function(currentValue){
    return currentValue> 18;
});
console.log(checkAge); // return index number

var numbers = [1,2,3,4,5,6,7,8,9,10]
var checkNumbers = numbers.findIndex(function(currentValue){
    return currentValue > 2;
});
console.log(checkNumbers); // return index number

// The findIndex() method returns -1 if no match is found.
var numbers = [1,2,3,4,5,6,7,8,9,10]
var checkNumbers = numbers.findIndex(function(currentValue){
    return currentValue > 100;
});
console.log(checkNumbers); 