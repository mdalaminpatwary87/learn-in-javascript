var arr = [1 ,2 ,3 ,4 ,5]
arr.forEach(function(value, index, arr){
    console.log(value, index, arr)
})

//add array
var sum = 0
var arr = [1 ,2 ,3 ,4 ,5]
arr.forEach(function(value, index, arr){
    sum += value
})
console.log(sum)


//manually implentation forEach
var arr = [1 ,2 ,3 ,4 ,5]
function forEach(arr){
    for(var i=0; i<arr.length;i++){
        console.log(arr[i])
    }
}
forEach(arr)

//manually implentation forEach
var arr = [1 ,2 ,3 ,4 ,5]
function forEach(arr,callback){
    for(var i=0; i<arr.length;i++){
        callback(arr[i])
    }
}
forEach(arr, function(value){
    console.log(value)
})
//sum
var arr = [1 ,2 ,3 ,4 ,5]
function forEach(arr,callback){
    for(var i=0; i<arr.length;i++){
        callback(arr[i])
    }
}
var sum = 0
forEach(arr, function(value){
    sum += value
})
console.log(sum)

//manually implentation forEach
var arr = [1 ,2 ,3 ,4 ,5]
function forEach(arr,callback){
    for(var i=0; i<arr.length;i++){
        callback(arr[i],i,arr)
    }
}
forEach(arr, function(value,index,arr){
    console.log(value,index,arr)
})

//manually implentation forEach
var arr = [1 ,2 ,3 ,4 ,5]
function forEach(arr,callback){
    for(var i=0; i<arr.length;i++){
        callback(arr[i],i,arr)
    }
}
forEach(arr, function(value,index,arr){
    arr[index] = value + 5
})
console.log(arr)
