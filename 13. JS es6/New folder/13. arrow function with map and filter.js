const studentInfo = [
    {
        id: 101,
        name: "Ariful Islam Arif",
        cgpa: 3.90
    },
    {
        id: 102,
        name: "Sakib Al Hasan",
        cgpa: 2.90
    },
    {
        id: 104,
        name: "Arafat Sanny",
        cgpa: 3.65
    }
];

/* 
    - javascript normal function or traditional function.

*/
function studentName(){
    return studentInfo.filter(function(x){
       return x.cgpa > 3.00
    }).map(function(y){
        return y.name;
    })
};
console.log(studentName())

/* 
    - javascript ES6 arrow function.

*/
studentName = () => studentInfo.filter(x => x.cgpa > 3.00).map((y) => y.name);
console.log(studentName());