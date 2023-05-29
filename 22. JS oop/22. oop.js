//class constructor
class Car{
    constructor(name,tier){
        this.name = name
        this.tier = tier
    }
    //class method or function 
    aboutCar(){
        return `This Car name is ${this.name} and have ${this.tier} tier.`
    }
    static staticMethod(){
        return 'You could not acces this method in instantiate'
    }
    get getName(){
        return `The car name is ${this.name}`
    }
    set getName(value){
        this.name = value
    }

}
//invoke or calling 
var farari = new Car('Ferari',4)
console.log(farari)
console.log(farari.aboutCar())

//prototype in javascript
console.log(farari)
console.log(Car.prototype)
console.log(farari.prototype) //undefined because will create car instiansiate not farari.
console.log(farari.__proto__)
console.log(Car.prototype == farari.__proto__)

//static method 
// console.log(farari.staticMethod())// not access instantiate
console.log(Car.staticMethod())//access done


//Getter & Setter in js 
console.log(farari.getName) //getter
farari.getName = 'Premio' //setter
console.log(farari.getName)

// 4 piller of oop 





