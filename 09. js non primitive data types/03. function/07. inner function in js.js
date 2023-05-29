function something(greet, name){
    function sayHi(){
        console.log(greet,name)
    }
    sayHi()
}
something('Good Morning','AHmd HriDoy')

//another example
function something1(greet, name){
    function getFirstName(){
        if(name){
            return name.split(' ')[0]
        }
    }
    var message = greet + ' ' +getFirstName()
    console.log(message)
}

//another example
something1('Good Morning','AHmd HriDoy')
function something1(greet, name){
    function getFirstName(){
        if(name){
            return name.split(' ')[0]
        }else{
            return ' '
        }
    }
    var message = greet + ' ' +getFirstName()
    console.log(message)
}
something1('Good Morning')
