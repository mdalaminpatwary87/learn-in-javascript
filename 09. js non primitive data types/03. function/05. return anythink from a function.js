
function addAll(){
    var sum = 0
    for(var i=0; i<arguments.length;i++){
        sum += arguments[i]
    }
    return sum
}
var a = addAll(1,2,3,4)
var b = addAll(1,2,3.4,5,6)
console.log(a)
console.log(b)

function personInfo(name,email){
    return{
        name: name,
        email: email
    }
}
var p1 = personInfo('AHmd HriDoy', 'ahmedhridoy2789@gmail.com')
var p2 = personInfo('Rafi AHmed', 'ahmedhridoy2495@gmail.com')
console.log(p1)
console.log(p2)