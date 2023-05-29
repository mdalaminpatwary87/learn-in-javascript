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

class hp extends Computer{
    constructor(name,model,color){
        super(name,model)
        this.color=color
    }
    aboutComputer(){
        //polymorphism overwrite.
        console.log(`This computer name is ${this.name} and the model is ${this.model}. Color is ${this.color}.`)
    }
}
var pc1 = new hp('HP','HP965','red')
var pc2 = new hp('HP','HP96','Green')
pc1.aboutComputer()
pc2.aboutComputer()
