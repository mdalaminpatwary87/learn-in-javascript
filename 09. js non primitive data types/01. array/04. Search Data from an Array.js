//Example - 2
var arr = [1,5,6,8,22,66,9,6,50,70,90,100]
// var find = 100
var find = 101
for(var i=0; i<arr.length; i++){
    if(arr[i] == find){
        console.log('Data Found At Index: ' + i)
        break
    }else{
        console.log('Data Not Found')
    }
}

//Example - 2 better solution for same result 
var arr = [1,5,6,8,22,66,9,6,50,70,90,100]
var find = 101
var isFound = false
for(var i=0; i<arr.length; i++){
    if(arr[i] == find){
        console.log('Data Found At Index: ' + i)
        isFound = true
        break
    }
}

if(!isFound){
    console.log('Data Not Found Try Again!')
}