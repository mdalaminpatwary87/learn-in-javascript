//Create Computer Class called parent
class Computer{
    constructor(name,model){
        this.name=name
        this.model=model
    }
    aboutComputer(){
        console.log(`This computer name is ${this.name} and the model is ${this.model}.`)
    }
}
var pc1 = new Computer('Dell','dell36')
pc1.aboutComputer()

// //Create Hp Class called child 
class hp{
    constructor(name,model,warenty){
        this.name=name
        this.model=model
        this.warenty=warenty
    }
    aboutComputer(){
        console.log(`This computer name is ${this.name} and the model is ${this.model}.`)
    }

    aboutWarenty(){
        console.log(`${this.name} provider ${this.warenty} year of warenty`)
    }
}
var pc2 = new hp('HP','HP965',3)
pc2.aboutComputer()
pc2.aboutWarenty()

//============THIS PROBLEMS SOLVE WITH INHERITANCE======//
class hp extends Computer{
    constructor(name,model,warenty){
        super(name,model)
        this.warenty=warenty
    }
    aboutWarenty(){
        console.log(`This computer name is ${this.name} and the model is ${this.model}. ${this.name} provider ${this.warenty} year of warenty`)
    }
}
var pc2 = new hp('HP','HP965',3)
pc2.aboutComputer()
pc2.aboutWarenty()
    