/*
    &&(AND) => The logical AND operator (&&) returns true if both conditions are true, and false if one or both conditions are false.
    0 0 - 0
    0 1 - 0
    1 0 - 0
    1 1 - 1
*/
var a = 10;
var b = 20;
var c = 30;
var d = 40;
if(a > b && c > d){
    console.log(`${a} is Greater than ${b} and ${c} is Greater than ${d}`);
}else if (a > b && d > c){
    console.log(`${a} is Greater than ${b} and ${d} is Greater than ${c}`);
}else if (a < b && c > d){
    console.log(`${a} is Smaller than ${b} and ${c} is Greater than ${d}`);
}else if (a < b && c < d){
    console.log(`${a} is Smaller than ${b} and ${c} is Smaller than ${d}`);
}else {
    console.log('At least one condition is false.');
};

/*
    || (OR) => The logical OR operator (||) returns true if one or both conditions are true, and false if both conditions are false.
    0 0 - 0
    0 1 - 1
    1 0 - 1
    1 1 - 1
*/
var a = 10;
var b = 20;
var c = 30;
var d = 40;
if (a > b || c > d) {
    console.log(`${a} is Greater than ${b} and ${c} is Greater than ${d}`);
}else if (a > b || d > c){
    console.log(`${a} is Greater than ${b} and ${d} is Greater than ${c}`);
}else if (a < b || c > d){
    console.log(`${a} is Smaller than ${b} and ${c} is Greater than ${d}`);
}else if (a < b || c < d){
    console.log(`${a} is Smaller than ${b} and ${c} is Greater than ${d}`);
}else {
    console.log('At least one condition is false.');
};

/*
    ! (NOT) => The logical NOT operator (!) returns true if the condition is false, and false if the condition is true.
    0 - 1
    1 - 0
*/
var a = 100;
var b = 20;
if (!(a > b)){
    console.log(`${a} is Greater than ${b}`);
}else {
    console.log('False');
};

var a = 100;
var b = 20;
if (!(b > a)){
    console.log(`${b} is Smaller than ${a}`);
}else{
    console.log('True');
};
