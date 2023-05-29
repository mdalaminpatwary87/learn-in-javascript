/*====================================================================================================================================================
Math.random() => 
              - Math.random() returns a random number between 0 (inclusive),  and 1 (exclusive)
=====================================================================================================================================================*/
// Math.random() always returns a random number lower than 1.
console.log(Math.random());

// Math.random() used with Math.floor() can be used to return random integers. Here returns a random integer from 0 to 9
console.log(Math.floor(Math.random() * 10));

// returns a random integer from 0 to 10
console.log(Math.floor(Math.random() * 11));

// returns a random integer from 0 to 99
console.log(Math.floor(Math.random() * 100));

// returns a random integer from 1 to 10
console.log(Math.floor(Math.random() * 10) + 1);

// returns a random integer from 1 to 100
console.log(Math.floor(Math.random() * 100) + 1);

// JavaScript proper random function => JavaScript function always returns a random number between min (included) and max (excluded)
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
console.log(getRndInteger(0,10));

// JavaScript function always returns a random number between min and max (both included)
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
console.log(getRndInteger(0,10));