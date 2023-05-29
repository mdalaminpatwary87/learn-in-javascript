// class Computer{
//     constructor(name,model,warenty){
//         this.name=name
//         this.model=model
//         this.warenty=warenty
//     }
//     aboutComputer(){
//         console.log(`This computer name is ${this.name} and the model is ${this.model}`)
//     }

//     aboutWarenty(){
//         console.log(`${this.name} provider ${this.warenty} year of warenty`)
//     }
// }
// var dell = new Computer('Dell','dell965',10)
// console.log(dell.name)
// console.log(dell.model)
// console.log(dell.warenty) //all acess bahire //encap
// dell.aboutComputer()
// dell.aboutWarenty() //encap

// class Computer{
//     #warenty //# means private 
//     constructor(name,model,warenty){
//         this.name=name
//         this.model=model
//         this.#warenty=warenty
//     }
//     aboutComputer(){
//         console.log(`This computer name is ${this.name} and the model is ${this.model}`)
//     }

//     aboutWarenty(){
//         console.log(`${this.name} provider ${this.#warenty} year of warenty`)
//     }
// }
// var dell = new Computer('Dell','dell965',10)
// console.log(dell.name)
// console.log(dell.model)
// console.log(dell.warenty) //off 
// dell.aboutComputer()
// dell.aboutWarenty()


//private method
class Computer{
    #warenty //# means private 
    constructor(name,model,warenty){
        this.name=name
        this.model=model
        this.#warenty=warenty
    }
    aboutComputer(){
        console.log(`This computer name is ${this.name} and the model is ${this.model}`)
        this.#aboutWarenty()
    }

    #aboutWarenty(){
        console.log(`${this.name} provider ${this.#warenty} year of warenty`)
    }
}
var dell = new Computer('Dell','dell965',10)
dell.aboutComputer()
// dell.#aboutWarenty()



