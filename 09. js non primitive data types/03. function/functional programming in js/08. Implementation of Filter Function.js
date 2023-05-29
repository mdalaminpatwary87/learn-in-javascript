var arr = [4, 8, 1, 3, 5, 6, 4, 3, 9]
var filteredArr = arr.filter(function(value){
    return value % 2 == 0
})
console.log(filteredArr)

var arr = [4, 8, 1, 3, 5, 6, 4, 3, 9]
var filteredArr = arr.filter(function(value){
    return value % 2 == 1
})
console.log(filteredArr)

var arr = [4, 8, 1, 3, 5, 6, 4, 3, 9]
var filteredArr = arr.filter(function(value){
    return value > 4
})
console.log(filteredArr)


//Implementation 
var arr = [4, 8, 1, 3, 5, 6, 4, 3, 9]
function myFilter(arr) {
    var newArr = []
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0){
            newArr.push(arr[i])
        }
    }
    return newArr
}
console.log(myFilter(arr))


var arr = [4, 8, 1, 3, 5, 6, 4, 3, 9]
function myFilter(arr, callback) {
    var newArr = []
    for (var i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            newArr.push(arr[i])
        }
    }
    return newArr
}
console.log(myFilter(arr, function (value) {
    return value % 2 === 1
}))
console.log(myFilter(arr, function (value) {
    return value > 4
}))