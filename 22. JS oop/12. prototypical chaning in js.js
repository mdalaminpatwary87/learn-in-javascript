//==========================================================//
var arr = [1,2,3,4]
console.log(arr)
console.log(new Array)

//==========================================================//
// similarly obj
var obj = {
    name: 'HriDoy'
}
console.log(obj)
console.log(new Object)
console.log(Object()) //same as console.log(new Object)
//==========================================================//

var Computer = function(name,model){
    this.name = name
    this.model = model
} 
Computer.prototype.aboutComputer = function(){
    console.log(`This computer name is ${this.name} and the model is ${this.model}`)
}
var dell =  Computer("Dell","Dell961")
var hp = new Computer("HP","HPl961")
console.log(dell) // constructor don't show because new keyword likha hoy na.
console.log(hp) // constructor show because new keyword likha hoyeche.
//==========================================================//

console.log(Computer.prototype)
console.log(hp.prototype)
console.log(hp.__proto__)
console.log(hp.__proto__.__proto__)
console.log(hp.__proto__.__proto__.__proto__)//null => no have prototype
console.log(Computer.prototype == hp.__proto__)
console.log(Object.getPrototypeOf(hp)) //eveaything is obj in js

//=========================this is actually prototype chaning=================================//
console.log(hp.hasOwnProperty("name"))




