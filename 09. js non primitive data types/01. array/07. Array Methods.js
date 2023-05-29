 //join(separator?)
 var arr =[1,2,3,4,5,6,7,8,9,44,100]
//  console.log(arr.join(''))
//  console.log(arr.join(' '))
//  console.log(arr.join(' | '))
//  console.log(arr.join(', '))

 //fill()
 var arr =[1,2,3,4,5,6,7,8,9,44,100]
//  console.log(arr.fill(0))
//  console.log(arr.fill(2, 3))

//concat()
var arr =[1,2,3,4,5,6,7,8,9,44,100]
var arr2 =[1,2,3,4,5,6]
var arr3 = arr.concat(arr2)
console.log(arr3)

//
var arr =[1,2,3,4,5,6,7,8,9,44,100]
console.log(Array.isArray(arr))

//
var arr =[1,2,3,4,5,6,7,8,9,44,100]
var arr2 = Array.from(arr)
console.log(arr2)
//whey form
var a = [1,2]
var b = a
b[0] = 5
console.log(a)

var a = [1,2]
var b = Array.from(a)
b[0] = 5
console.log(a)
console.log(b)
