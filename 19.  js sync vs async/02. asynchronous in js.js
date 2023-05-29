/* 
    - asynchronous code in JavaScript is code that does not execute sequentially, but rather executes in a non-blocking manner.
    - When a statement is executed asynchronously, the code does not wait for the statement to be completed before moving on to the next statement.
    - - asynchronous code can be implemented using a variety of techniques, including callbacks, promises, and async/await syntax.
*/
var task1 = () => console.log('task1');
var task2 = () => {
    setTimeout(()=>{
        console.log('data received');
    },2000);
}
var task3 = () => console.log('task3');
var task4 = () => console.log('Waiting for data...');
task1();
task2();
task3();
task4();