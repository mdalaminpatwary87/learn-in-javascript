var Computer = function(name,model){
    this.name = name
    this.model = model
}
Computer.sayAboutComputer = function(){
    console.log('This is computer')
}
var dell = new Computer("Dell","Dell961")
console.log(dell)
// dell.sayAboutComputer()
Computer.sayAboutComputer()


class MyName{
    constructor(name,model){
        this.name=name
        this.model=model
    }
    aboutComputer(){
        console.log(`This computer name is ${this.name} and the model is ${this.model}`)
    }
    static sayAboutComputer = function(){
        console.log('This is computer')
    }
}
var dell = new MyName('Dell','dell965')
console.log(dell)
// dell.sayAboutComputer()
MyName.sayAboutComputer()
