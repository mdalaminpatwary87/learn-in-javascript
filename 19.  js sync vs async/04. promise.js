/*Learning Outcomes:
    - how to create a promise
    - how to use a promise
    - how to run multiple promise -all()
    - race()
    -promise channing
*/

// pending,resolve,reject
var promise1 = new Promise((resolve,reject) => {
    var completePromise = true;
    if(completePromise){
        resolve('complete promise');
    }else{
        reject('not complete promise');
    };
});

// promise1.then((res) => {
//     console.log(res)
// })
// .catch((err) =>{
//     console.log(err)
// })


// 
var promise2 = new Promise((resolve,reject) => {
    resolve('complete promise');
});
// promise2.then((res) => {
//     console.log(res)
// })
// console.log('last')

// all()
Promise.all([promise1,promise2])
.then((res)=>console.log(res))
.catch((err)=>console.log(err));

// race()
var promise1 = new Promise((resolve,reject) => {
    setTimeout(()=>{
        resolve('Complete promise 1')
    },2000)
});

var promise2 = new Promise((resolve,reject) => {
    setTimeout(()=>{
        resolve('Complete promise 2')
    },1000)
});
Promise.race([promise1,promise2]).then((res) => console.log(res));


/* 
    - promise chaning

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
            //  reject("reject");
         },2000)
     });
 };
 
var task3 = () => {
     return new Promise((resolve,reject) =>{
         setTimeout(()=>{
             resolve("Task 3");
         },4000)
     });
 };
 
var task4 = () => {
    return new Promise((resolve,reject) =>{
         resolve("Task 4");
     });
 };
 
 task1()
 .then((res)=> console.log(res))
 .then(task2)
 .then((res)=> console.log(res))
 .then(task3)
 .then((res)=> console.log(res))
 .then(task4)
 .then((res)=> console.log(res))
 .catch((err) =>console.log(err))