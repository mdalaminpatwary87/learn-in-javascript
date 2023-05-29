/*====================================================================================================================================================
ES6 truthy or falsy values => 
                01. if variable assign false, 0, null, undefined, '', NaN. Only this six value return false. Otherwise all of the value is return true
====================================================================================================================================================*/
var myVariable = true;
if(myVariable){
    console.log('This is truthy');
}else{
    console.log('This is falsy');
} 

var myVariable = 'test';
if(myVariable){
    console.log('This is truthy');
}else{
    console.log('This is falsy');
} 

var myVariable = ['Hello', 10];
if(myVariable){
    console.log('This is truthy');
}else{
    console.log('This is falsy');
} 

// Blewreturn This is falsy 
var myVariable = false;
if(myVariable){
    console.log('This is truthy');
}else{
    console.log('This is falsy');
} 

var myVariable = 0;
if(myVariable){
    console.log('This is truthy');
}else{
    console.log('This is falsy');
} 

var myVariable = '';
if(myVariable){
    console.log('This is truthy');
}else{
    console.log('This is falsy');
} 

var myVariable = null;
if(myVariable){
    console.log('This is truthy');
}else{
    console.log('This is falsy');
} 

var myVariable = undefined;
if(myVariable){
    console.log('This is truthy');
}else{
    console.log('This is falsy');
}