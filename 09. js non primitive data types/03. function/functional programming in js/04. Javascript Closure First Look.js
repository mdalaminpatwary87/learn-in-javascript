// Closure => Jodi Kono Scope Er Vithore Bahirer kono Scope theke data ase (arguments akare noy) tahole setake closure bole.
var  b = 20 // Global scope
function a(){// function scope 
    console.log(b) // This is closure. 
}

// another example - Open with chorem console (ctrl+shift+i)
function a(){ // 1st scope
    var x = 5
    return function(){ // 2nd scope 
        console.log(x) // This is aslo closure. 
    }
}
var abc = a()
console.dir(abc)