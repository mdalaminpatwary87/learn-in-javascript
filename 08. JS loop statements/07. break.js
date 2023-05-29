// break => The break statement can be used to "jumps out" of a loop.
for (var i = 1; i <= 10; i++){
    // here break statement ends the loop when the loop counter (i) is 3
    if (i == 3){
        break;
    }
    console.log(i);
};
console.log('Loop break!');