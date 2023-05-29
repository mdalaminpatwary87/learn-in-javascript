/* 
    - The rest parameter is a feature introduced in ES6 (ECMAScript 2015) that allows you to pass an indefinite number of arguments as an array into a function.
    - The rest parameter is denoted by an ellipsis (...) followed by the parameter name.
*/
function myFunction(...numbers){
    console.log(numbers);
}
myFunction(10,20,2,6,9,8,3,5);

function myFunction(x,y,...numbers){
    console.log(x);
    console.log(y);
    console.log(numbers);
}
myFunction(10,20,2,6,9,8,3,5);

/*01: error ...params must be last
    function myFunction(...numbers,x){ 
        console.log(x)
        console.log(numbers);
    }
    myFunction(10,20,2,6,9,8,3,5);
*/

/*02: error ...not use multiple times
    function myFunction(x,...numbers,...test){ 
        console.log(x)
        console.log(numbers);x
    }
    myFunction(10,20,2,6,9,8,3,5);
*/