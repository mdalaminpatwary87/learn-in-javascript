/*
    - 
*/
var task1 = () => {
   return new Promise((resolve,reject) =>{
        resolve("Task 1");
    });
};

var task2 = () => {
   return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            resolve("Task 2");
        },2000)
    });
};

var task3 = () => {
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            // resolve("Task 3");
            reject("reject");
        },4000)
    });
};

var task4 = () => {
   return new Promise((resolve,reject) =>{
        resolve("Task 4");
    });
};

// var callback = async() =>{
//     const t1 = await task1();
//     console.log(t1);

//     const t2 = await task2();
//     console.log(t2);

//     const t3 = await task3();
//     console.log(t3);

//     const t4 = await task4();
//     console.log(t4);
// }
// callback();


// error handing
var callback = async() =>{
    try{
        const t1 = await task1();
        console.log(t1);
    
        const t2 = await task2();
        console.log(t2);
    
        const t3 = await task3();
        console.log(t3);
    
        const t4 = await task4();
        console.log(t4);
    }catch(err){
        console.log(err)
    }
};
callback();