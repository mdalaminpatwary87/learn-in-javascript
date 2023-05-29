/*====================================================================================================================================================
JavaScript Object Accessors (Getters and Setters) =>
                01. ECMAScript 5 (ES5 2009) introduced Getter and Setters.
                02. Getters and setters allow you to define Object Accessors (Computed Properties).
======================================================================================================================================================*/
/*====================================================================================================================================================
JavaScript Getter (The get Keyword) =>
This example uses a lang property to get the value of the language property.
======================================================================================================================================================*/
var person = {
    firstName: "John",
    lastName: "Doe",
    language: "en",
    get lang() {
      return this.language;
    }
  };
console.log(person.lang);

var person = {
    firstName: "John",
    lastName: "Doe",
    language: "en",
    get fullName() {
      return this.firstName + ' ' + this.lastName; // Computed Properties
    }
  };
console.log(person.fullName);

/*====================================================================================================================================================
JavaScript Setter (The set Keyword) =>
This example uses a lang property to set the value of the language property.
======================================================================================================================================================*/
var person = {
    firstName: "John",
    lastName: "Doe",
    language: "",
    set lang(lang) {
      this.language = lang;
    }
  };
// Set an object property using a setter:
person.lang = "en";
console.log(person.language);

var person = {
    firstName: "",
    lastName: "",
    language: "",
    set fName(value) {
        return this.firstName = value;
    },
    set lName(values) {
        return this.lastName = values;
    },
    set lang(lang) {
        this.language = lang;
    },
    get fullName() {
        return this.firstName + ' ' + this.lastName; 
    },
    get lang(){
        return this.language; 
    }
  };
person.fName = "john";
person.lName = "Doe";
person.lang = "English";
console.log(person.lang);
console.log(person.fullName);
console.log(`Your Name is ${person.fullName} and mother language is ${person.lang}.`);

// one & more using person blueprint 
var person1 = person;
person1.ftName ="AHmd";
person1.lName = "HriDoy";
person1.lang = "Bangla";
console.log(`Your Name is ${person.fullName} and mother language is ${person.lang}.`);

/*====================================================================================================================================================
JavaScript Function or Getter? 
What is the differences between these two examples?
======================================================================================================================================================*/
// Example 1 : Using function  
var person = {
    firstName: "John",
    lastName: "Doe",
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  };
console.log(person.fullName()); // access fullName as a function: person.fullName().

// Example 2 : Using getter 
const person = {
    firstName: "John",
    lastName: "Doe",
    get fullName() {
      return this.firstName + " " + this.lastName;
    }
  };
  console.log(person.fullName); //  access fullName as a property: person.fullName & provides a simpler syntax.

/*====================================================================================================================================================
Data Quality => JavaScript can secure better data quality when using getters and setters.
======================================================================================================================================================*/
// Using the lang property, in this example, returns the value of the language property in upper case.
var person = {
    firstName: "John",
    lastName: "Doe",
    language: "en",
    get lang() {
      return this.language.toUpperCase();
    }
  };
console.log(person.lang);

// Using the lang property, in this example, stores an upper case value in the language property:
var person = {
    firstName: "John",
    lastName: "Doe",
    language: "",
    set lang(lang) {
      this.language = lang.toUpperCase();
    }
  };
// Set an object property using a setter:
person.lang = "en";
console.log(person.language);

/*====================================================================================================================================================
Why Using Getters and Setters? =>
                    01. It gives simpler syntax
                    02. It allows equal syntax for properties and methods
                    03. It can secure better data quality
                    04. It is useful for doing things behind-the-scenes
======================================================================================================================================================*/
/*====================================================================================================================================================
Object.defineProperty() => The Object.defineProperty() method can also be used to add Getters and Setters:
======================================================================================================================================================*/
var person = {
    firstName: "John",
    lastName: "Doe",
};

Object.defineProperty(person, 'fullName',{
    get : function(){return this.firstName + ' ' + person.lastName;}
});
console.log(person.fullName);

// setter 
var person = {
    firstName: "",
    lastName: "",
};
Object.defineProperty(person, "fName", {
    set : function (value) {
        this.firstName = value}
  });
Object.defineProperty(person, "lName", {
    set : function (values) {
        this.lastName = values}
  });
person.fName = 'AHmd'
person.lName = 'HriDoy'
console.log(person.firstName);
console.log(person.lastName);
