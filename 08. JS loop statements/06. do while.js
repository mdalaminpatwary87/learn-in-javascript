/*====================================================================================================================================================
do while => do while loop is a variant of the while loop. This loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.
            syntax =>
                    variable initializer
                    do{
                        // code block to be executed
                        // increments/decrements
                    }while (condition);
======================================================================================================================================================*/
// print 1 -> 10 using do while loop
var i = 1;
do{
    console.log(i);
    i++;
}while(i <= 10);

// This loop will execute once, before checking the condition.
var i = 11;
do{
    console.log(i); // here return 11 where while loop doesn't execute it
    i++;
}while(i <= 10); 
