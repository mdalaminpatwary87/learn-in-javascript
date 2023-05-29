class Computer{
    constructor(name,model){
        this.name=name
        this.model=model
    }
    aboutComputer(){
        console.log(`This computer name is ${this.name} and the model is ${this.model}`)
    }
    get computerName(){
        return this.name
    }
    set computerName(value){
        this.name = value
    }
}
var pc1 = new Computer('Dell','dell965')
var pc2 = new Computer('HP','hp965')
console.log(pc1.computerName)
console.log(pc2.computerName)

//===================================//
pc1.computerName = 'Lenovo'
console.log(pc1.computerName)




