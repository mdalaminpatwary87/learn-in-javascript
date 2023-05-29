var computer = {
    name: "",
    model: "",
    aboutComputer(){
        console.log(`This computer name is ${this.name} and the model is ${this.model}`)
    }
}
var pc1 =Object.create(computer) 
pc1.name = 'Dell'
pc1.model = 'dell969'
pc1.aboutComputer()
console.log(pc1)