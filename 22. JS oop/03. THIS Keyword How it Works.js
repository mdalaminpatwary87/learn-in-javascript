function myFunc(){
    console.log(this)
}
myFunc()

function myFunc(){
    console.log(this)
}
new myFunc()

var rect = {
    width: 100,
    height: 50,

    draw: function(){
        console.log('I am a rectangle')
        this.printProperties()
    },
    printProperties: function(){
        console.log('My width is ' + this.width)
        console.log('My height is ' + this.height)
    }
}
rect.draw()


var another = {
    width: 10,
    height: 90,
    print: rect.printProperties
}
another.print()