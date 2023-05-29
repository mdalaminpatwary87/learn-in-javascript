/*====================================================================================================================================================
continue => 
         - The continue statement "jumps over" one iteration in the loop.
         - The continue statement breaks one iteration (in the loop), if a specified condition occurs, and continues with the next iteration in the loop.
======================================================================================================================================================*/
for (var i = 1; i <= 10; i++){
    // here return 1,2,4,5,6,7,8,9,10 skip iteration 3 because if a specified condition occurs, and continues with the next iteration in the loop.
    if (i == 3){
        continue; 
    }
    console.log(i);
};