// Map => Ager arry or object ke modify kore notun array object return kora
var arr = [1,2,3]
var sqrArr = arr.map(function(value){
    return Math.random() * 100
})
console.log(arr)
console.log(sqrArr)


var arr = [1,2,3]
var sqrArr = arr.map(function(value){
    return value * value
})
console.log(arr)
console.log(sqrArr)


// Implementation this formulaaa
var arr = [1,2,3]
function myMap(arr){
    var newArray = []
    for(var i=0; i<arr.length;i++){
        var tem = arr[i] * arr[i]
        newArray.push(tem)
    }
    return newArray
}
console.log(myMap(arr))
//
var arr = [1,2,3]
function myMap(arr,callback){
    var newArray = []
    for(var i=0; i<arr.length;i++){
        var tem = callback(arr[i])
        newArray.push(tem)
    }
    return newArray
}
console.log(myMap(arr,function(value){
    return value * value * value

}))

//
console.log(myMap(arr,function(value){
    return value * 10

}))

