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
    constructor(name,model,warenty){
        super(name,model)
        this.warenty=warenty
    }
    aboutWarenty(){
        console.log(`This computer name is ${this.name} and the model is ${this.model}. ${this.name} provider ${this.warenty} year of warenty.`)
    }

    useComputer(value){
        console.log(`${(this.warenty * 12) - value} month warenty remaing.`)
    }
}
var pc1 = new hp('HP','HP965',3)
pc1.aboutComputer()
pc1.aboutWarenty()
pc1.useComputer(30)
    