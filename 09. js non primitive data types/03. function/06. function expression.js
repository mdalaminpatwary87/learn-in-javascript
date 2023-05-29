// Normal Function structure like:
function add(a,b){
    return a + b
}
console.log(add(10,20))

// this function store variabe this is called function expression 
var addAll = function(a,b){
    return a + b
}
console.log(addAll(100,20))

//another example 
var another = addAll
console.log(another(100,300))

//another example 
setTimeout(function(){
    console.log('I will call after 5 second')
},5000)
