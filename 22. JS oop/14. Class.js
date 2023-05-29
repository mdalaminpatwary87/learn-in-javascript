// class expretion
// var myName = class{

// }
// // class declaration
// class MyName{

// }
//==========================================================//
// class declaration
class MyName{
    constructor(name,model){
        this.name=name
        this.model=model
    }
    aboutComputer(){
        console.log(`This computer name is ${this.name} and the model is ${this.model}`)
    }
}

var dell = new MyName('Dell','dell965')
console.log(dell)
dell.aboutComputer()


//challenge    
class HouseRent{
    constructor(amount){
        this.amount = amount
    }
    houseRentIncrementByYearly(){
        this.amount += 1000
        console.log(`Next Year My Rent Will Be ${this.amount}`)
    }
    houseRentdecrementByYearly(){
        this.amount -= 1000
        console.log(`Next Year My Rent Will Be ${this.amount}`)
    }
}
var myHouse = new HouseRent(15000)
console.log(myHouse)
myHouse.houseRentIncrementByYearly()
myHouse.houseRentIncrementByYearly()
myHouse.houseRentIncrementByYearly()
console.log(myHouse)
myHouse.houseRentdecrementByYearly()
myHouse.houseRentdecrementByYearly()





