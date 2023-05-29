// What is Pure Function?
    // It Returns the same result if given the same arguments
    // It does not cause any observable side effects
function sqr(n){
    return n*n
}
//one & more time its give same valus & full fill first rules.
console.log(sqr(2))// It does not cause any observable side effects
console.log(sqr(2))
console.log(sqr(3))
console.log(sqr(3))

//This example is not pure function it has a side effects
var n = 10
function change() {
    n = 100
}
//2nd jokhon function call korbo tokhon n er value 100 asbe. Tai etake pure functon bola jay na karon er side effect ase.
change()
//Jokhon etaa first e console korbo dekhbo n er value 10 ase
console.log(n)


//This example is not pure function it has a side effects
var point = {
    x: 45,
    y: 30
}
function printPoint(point) {
    point.x = 100
    point.y = 200
    console.log(point)
}
printPoint(point)
console.log(point)