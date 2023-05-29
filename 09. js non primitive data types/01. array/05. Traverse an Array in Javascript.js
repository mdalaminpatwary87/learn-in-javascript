// var arr = [4,5,1,6,8,9,40]
// arr[0]
// arr[1]
// arr[2]
// arr[3]
// console.log(arr.length-1)
var arr = [4,5,1,6,8,9,40]
for(var i=0; i<arr.length; i++){
    console.log(arr[i])
}

//ading 2
var arr = [4,5,1,6,8,9,40]
for(var i=0; i<arr.length; i++){
    arr[i] = arr[i] + 2
}
console.log(arr)

//sum
var arr = [4,5,1,6,8,9,40]
var sum = 0
for(var i=0; i<arr.length; i++){
    sum += arr[i]
}
console.log(sum)

//even
var arr = [4,5,1,6,8,9,40]
for(var i=0; i<arr.length; i++){
    if(arr[i] % 2 == 0){
        console.log(arr[i])
    }
}
//odd
var arr = [4,5,1,6,8,9,40]
for(var i=0; i<arr.length; i++){
    if(arr[i] % 2 == 1){
        console.log(arr[i])
    }
}
//hw 
//even sum
//odd sum
