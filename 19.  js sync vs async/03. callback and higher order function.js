/* 
  - A callback function in JavaScript is a function that is passed as an argument to another function and is executed when that function is called.
  - Callback functions are often used in asynchronous programming to handle the result of an asynchronous operation, such as when making an API request or reading a file from disk.
*/
function greet(name,callback){
    console.log(`Hello ${name}!`);
    callback();
};

function wlcomeMessage(){
    console.log('Welcome to our programming community!');
};

greet('John', wlcomeMessage);

/*
    - Here another example
*/
var fetchData = (callbacks) => {
    setTimeout(() =>{
        callbacks('Data received');
    },2000)
}

fetchData(function(result){
    console.log(result);
  });
console.log('Waiting for data...');

/* 
  - example usning
*/
var task1 = (callback)=>{
    console.log('Task1');
    callback();
};

var task2 = (callback)=>{
    setTimeout(() =>{
        console.log('Task2');
        callback();
    },2000);
};

var task3 = (callback)=>{
    console.log('Task3');
    callback();
};

var task4 = (callback)=>{
    setTimeout(() =>{
        console.log('Task4');
        callback();
    },5000);
};

var task5 = ()=>{
    console.log('Task5');
};

task1(() =>{
    task2(() => {
        task3(() =>{
            task4(() =>{
                task5();
            });
        });
    });
});