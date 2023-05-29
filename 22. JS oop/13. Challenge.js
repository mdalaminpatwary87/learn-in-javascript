var HouseRent = function(amount){
    this.amount = amount
}
HouseRent.prototype.houseRentIncrementByYearly =function(){
    this.amount += 1000
    console.log(`Next Year My Rent Will Be ${this.amount}`)
}
HouseRent.prototype.houseRentdecrementByYearly =function(){
    this.amount -= 1000
    console.log(`Next Year My Rent Will Be ${this.amount}`)
}
var myHouse = new HouseRent(15000)
console.log(myHouse)
myHouse.houseRentIncrementByYearly()
myHouse.houseRentIncrementByYearly()
myHouse.houseRentIncrementByYearly()
console.log(myHouse)
myHouse.houseRentdecrementByYearly()
myHouse.houseRentdecrementByYearly()


