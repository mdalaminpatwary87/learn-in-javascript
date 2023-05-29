// First Class Function
    // 1. A Function can be Stored in a Variable
    // 2. A Function can be Stored in an Array
    // 3. A Function can be Stored in an Object
    // 4. We can Create Function as Need
    // 5. We can Pass Function as an Arguments
    // 6. We can return Functions from Another Function

// 1. A Function can be Stored in a Variable
function add(a, b){
    return a + b
}
var sum = add
console.log(sum(5,9))
console.log(typeof sum)

// 2. A Function can be Stored in an Array
var arr = []
arr.push(add)
console.log(arr)
console.log(arr[0](5, 3))

// 3. A Function can be Stored in an Object
var obj = {
    sum: add
}
console.log(obj)
console.log(obj.sum(7, 9))

// 4. We can Create Function as Need
setTimeout(function () {
    console.log('I have created...')
}, 100)
