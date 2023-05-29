function test(a,b,c){
    var sum = 0
    for(var i=0; i<arguments.length;i++){
        sum += arguments[i]
    }
    console.log(sum)
}
test(1,2,3)

function addAll(){
    var sum = 0
    for(var i=0; i<arguments.length;i++){
        sum += arguments[i]
    }
    console.log(sum)
}
addAll(1,2,3,4)
addAll(1,2,3.4,5,6)
