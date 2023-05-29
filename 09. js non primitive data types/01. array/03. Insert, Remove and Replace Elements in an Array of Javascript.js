var arr = [1,2,3,4,5,6,7,8]
//insert 9 to index 3
// arr.push(9) //pore
// arr.unshift(9) //age
arr.splice(3,0,9)
// arr.splice(3,0,9,10)
console.log(arr)


//pop() => remove last elemets
var arr = [1,2,3,4,5,6,7,8]
arr.pop() //jokhon amra pop korbo, tokhon last er elements ta delete hoye jabe
console.log(arr)

//shift() => remove first elemets
var arr = [1,2,3,4,5,6,7,8]
arr.shift() //jokhon amra pop korbo, tokhon first er elements ta delete hoye jabe
console.log(arr)

//splice(index no, delete, insert) remmove 
var arr = [1,2,3,4,5,6,7,8]
arr.splice(3,1)
console.log(arr)

//update data 
var arr = [1,2,3,4,5,6,7,8]
arr.splice(3,1,44)
console.log(arr)
