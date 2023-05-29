// using for..loop
var cars = ["BMW", "Volvo", "Saab", "Ford"];
for(let i = 0; i < cars.length; i++){
    console.log(cars[i]);
};

// using forEach loop
var cars = ["BMW", "Volvo", "Saab", "Ford"];
cars.forEach(function(value, index){
    console.log(index,value);
});

// forEach using 
var cars = [10,20,30,40,50];
var squareNumber = [];
cars.forEach(function(value){
    squareNumber.push(value * value);
});
console.log(squareNumber);

// 
var myNumber = [10,20,30,40,50];
myNumber.forEach(function(value,index){
    myNumber[index] = value + 5;
});
console.log(myNumber);