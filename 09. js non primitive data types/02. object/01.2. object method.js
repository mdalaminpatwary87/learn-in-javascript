/*====================================================================================================================================================
Object Methods => 
Objects can also have methods. Methods are actions that can be performed on objects. Methods are stored in properties as function definitions.
                        ===================================================================================
                        Property	            Property Value
                        firstName	  :          John
                        lastName	  :          Doe
                        age	          :          50
                        eyeColor	  :         blue
                        funllName     :         function() {return this.firstName + " " + this.lastName;}
                        ===================================================================================
                        A method is a function stored as a property.

Accessing Object Methods => We access an object method with the following syntax.
                    objectName.methodName()
====================================================================================================================================================*/
var person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    } // this are js keyword. In a function definition, this refers to the "owner" of the function. this is the person object that "owns" the fullName function. So, this refers to the person object. this.firstName means the firstName property of this. // this.firstName means the firstName property of person.
  };
console.log(person.fullName())

// If we access a method without the () parentheses, it will return the function definition.
var person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    } 
  };
console.log(person.fullName);

var cars = {
    name : 'Fiat',
    model : 500,
    weight : '850 kg',
    color : 'white',
    start: function(){
        console.log('Car has started.')
    },
    drive: function(){
        console.log('Car has driving.')
    }
};
console.log(cars.weight);
cars.start();
cars.drive();
/*====================================================================================================================================================
Adding a Method to an Object => Adding a new method to an object is easy.
======================================================================================================================================================*/
var person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
  };
person.fullName = function() {
    return this.firstName + " " + this.lastName;
  } 
console.log(person.fullName());
console.log("My Brother is " + person.fullName());

/*====================================================================================================================================================
Using Built-In Methods =>This example uses the toUpperCase() method of the String object, to convert a text to uppercase:
======================================================================================================================================================*/
var person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return (this.firstName + " " + this.lastName).toUpperCase();
    } 
  };
console.log(person.fullName());
console.log("My Brother is: " + person.fullName());