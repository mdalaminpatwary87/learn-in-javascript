var numbers = [1,2,3,4,5,6];
var newNumbers = numbers.reduce((preValue, currentValue) => {
    return preValue + currentValue;
});
console.log(newNumbers);

var numbers = [1,2,3,4,5,6];
var newNumbers = numbers.reduce((preValue, currentValue, currentIndex, arr ) => {
    return preValue + currentValue;
});
console.log(newNumbers);