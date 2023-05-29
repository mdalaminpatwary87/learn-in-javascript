/*====================================================================================================================================================

====================================================================================================================================================*/
var numbers = [1,2,3,4,5];
var newArray = numbers.splice(1,2,10,12,13,19);
console.log(newArray); // return remove items. 
console.log(numbers); // main arry change and add  values

var numbers = [1,2,3,4,5];
var newArray = numbers.splice(-1,2,10,12,13,19);
console.log(newArray); // return remove items. 
console.log(numbers); // main arry change and add  values

