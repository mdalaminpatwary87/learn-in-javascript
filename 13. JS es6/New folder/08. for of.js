/* 
    - for of statement loops through the values of an iterable object such as arrays, strings, maps, sets and nodeList.
    - syntax: 
            for (variable of iterable) {
                // code block to be executed
            }
*/

/* 
    - Here's an example of using the for...of loop in JavaScript:
    - Looping over an Array
*/
const numberArray = [1, 2, 3, 4, 5];
for (let i of numberArray){
  console.log(i);
}

/* 
    - Here's an example of using the for...of loop in JavaScript:
*/
let string = "JavaScript";
for (let i of string){
    console.log(i);
};