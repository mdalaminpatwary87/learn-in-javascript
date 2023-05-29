function display(some){
    console.log(some)
}
function calculator(num1,num2){
    var sum = num1 + num2
    return sum
}
var result = calculator(10,20) // result 10 but not display 
display(result) //now dispay result & this is callbak function // not recomended 

//another way 
function display(some){
    console.log(some)
}

function calculator(num1,num2){
    var sum = num1 + num2
    display(sum) 
}
calculator(100,20)  // not recomended 

//callback 
function display(some){
    console.log(some)
}

function calculator(num1,num2,callback){
    var sum = num1 + num2
    // callback(sum) 
    if(callback){
        callback(sum)
    }
    // return sum
}
calculator(100,200,display) 
// var result = calculator(100,200,display) 
// console.log(result)

//callback 
function calculator(num1,num2,callback){
    var sum = num1 + num2
    // callback(sum) 
    if(callback){
        callback(sum)
    }
    // return sum
}
calculator(100,200,function(result){ //anonimash function
    console.log(result)
}) //

// another example => add 
function sample(a,b){
    var c = a + b
    var d = a - b
    var result = sum(c,d)
    return result
}
function sum(a,b){
    return a + b
}
console.log(sample(5,5))

// another example => add,sub,mul 
function sample(a,b,callback){
    var c = a + b
    var d = a - b
    var result = callback(c,d)
    return result
}
function sum(a,b){
    return a + b
}
// console.log(sample(5,8,sum))
// console.log(sample(5,8,function(a,b){
//     return a - b
// }))
console.log(sample(5,8,function(a,b){
    return a * b
}))







