// var arr = [2,4,5,3,9,10]
// var evenNumber = arr.filter(element => element % 2 ==0)
// console.log(evenNumber)

// console.log(Array.prototype) //arry build in function 
// console.log(new Array()) // new arry create 

// var Computer = function(name,model){
//     this.name = name
//     this.model = model
//     //method
//     this.aboutComputer = function(){
//         console.log(`This computer name is ${this.name} and the model is ${this.model}`)
//     }
// }
// var dell = new Computer("Dell","Dell961")
// var hp = new Computer("HP","HPl961")
// console.log(dell)
// console.log(hp)
// dell.aboutComputer()

//using prototype solve this 
// var Computer = function(name,model){
//     this.name = name
//     this.model = model
// } 
// Computer.prototype.aboutComputer = function(){
//     console.log(`This computer name is ${this.name} and the model is ${this.model}`)
// }

// var dell = new Computer("Dell","Dell961")
// console.log(dell)
// dell.aboutComputer()

// var hp = new Computer("HP","HPl961")
// console.log(hp)
// hp.aboutComputer()

//How to modify build-in Prototype?
// Array.prototype.filter = function(){
//     var arr = []
//     for(var i=0; i<this.length;i++){
//         console.log(this[i])
//     }
// }
// console.log([2,3,4,5,6,7].filter())

// //EvenNumber
Array.prototype.filter = function(){
    var arr = []
    for(var i=0; i<this.length;i++){
        if(this[i] % 2 == 0){
            arr.push(this[i])
        }
    }
    return arr
}
console.log([2,3,4,5,6,7].filter())


var arr = [2,4,5,3,9,10]
var oddNumber = arr.filter(element => element % 2 ==1)
console.log(oddNumber)
console.log([2,3,4,5,6,7].filter())








