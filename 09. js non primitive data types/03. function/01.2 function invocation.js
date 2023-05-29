/*====================================================================================================================================================
Function Invocation (calling Funciton) => The code inside the function will execute when "something" invokes (calls) the function:
    01. When an event occurs (when a user clicks a button)
    02. When it is invoked (called) from JavaScript code
    03. Automatically (self invoked)
====================================================================================================================================================*/
// Call or invoking function 
function functionName(){
    console.log('I am a Function')
}

function add(){
    var a = 10
    var b = 60
    console.log(a + b)
}

function sub(){
    var a = 100
    var b = 60
    console.log(a - b)
}
//funcion calling system 
functionName()
//one & more time use this name when we need like
functionName()
functionName()
functionName()
//if we want function use loop for repitation like
for(var i=0; i<=10;i++){
    functionName()
}

//add & sub function calling 
add()
sub()



/*====================================================================================================================================================
Invoking a JavaScript Function => 



====================================================================================================================================================*/
