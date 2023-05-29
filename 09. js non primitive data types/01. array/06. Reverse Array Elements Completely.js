//[1,2,3,4,5]
//[5,4,3,2,1]
 var arr = [1, 2, 3, 4, 5, 7]
 for(var i=0; i<(arr.length/2); i++){
    var temp = arr[i]
    arr[i] = arr[arr.length - 1 - i]
    arr[arr.length - 1 - i] = temp
 }
 console.log(arr)

 //using method 
 var arr = [1, 2, 3, 4, 5, 7,8]
 console.log(arr.reverse())