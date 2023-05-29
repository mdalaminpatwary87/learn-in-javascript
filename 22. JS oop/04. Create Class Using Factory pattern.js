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


//Factory Pattern
var createRect = function(width,height){
    return{
        width: width,
        height: height,
    
        draw: function(){
            console.log('I am a rectangle')
            this.printProperties()
        },
        printProperties: function(){
            console.log('My width is ' + this.width)
            console.log('My height is ' + this.height)
        }
    }
}
var rect1 = createRect(40,30)
rect1.draw()

var rect2 = createRect(50,50)
rect2.draw()

