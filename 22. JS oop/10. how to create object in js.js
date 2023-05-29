// There are three way to create object in Js. 01. Function constructor 02. Classes 03. Object.create() 

// Function constructor => 4 rules of Function constructor
    // 1. Create an empty obj{}
    // 2. function called this = {}
    // 3. {} Linked to the prototype
    // 4. {} will return automatically
var computer = function(){
    console.log(this)
}
computer() //=> it's (this keyword) refer window object. Not empty obj.
var pc = new computer() //=> it's return empty obj. we need actually this empty obj.[new => instance create]

//create empty obj & assign properties & values ,just see how to work this, new keyword
var obj = {}
obj.name = "AHmd HriDoy"
obj.age = 24
console.log(obj)

//When use FC variable name must start capital letter. 
var Computer = function(name,model){
    this.name = name
    this.model = model
}
var dell = new Computer("Dell","Dell961")
console.log(dell)
//one & more 
var hp = new Computer("HP","HPl961")
console.log(hp)

//how to create method 
var Computer = function(name,model){
    this.name = name
    this.model = model
    //method
    this.aboutComputer = function(){
        console.log(`This computer name is ${this.name} and the model is ${this.model}`)
    }
}
var dell = new Computer("Dell","Dell961")
console.log(dell)
dell.aboutComputer()

var hp = new Computer("HP","HPl961")
console.log(hp)
// hp.aboutComputer() //=> but no need this, tarpor o stroage khache




