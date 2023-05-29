//One dimention array like: var arr = [2,3.,4,5,6]
//Two dimention array like:
    // var arr = [
    //     [],
    //     [],
    //     [],
    //     []
    // ]

//Three Dimention Array
    // var arr = [
    //     [
    //         [],
    //         [],
    //         []
    //     ],
    //     [
    //         [],
    //         [],
    //         []
    //     ],
    //     [
    //         [],
    //         [],
    //         []
    //     ],
    //     [
    //         [],
    //         [],
    //         []
    //     ]
    // ]



var arr = [
    [70,80,90,95],
    [75,86,92,89],
    [50,90,95,98]
]
console.log(arr[0])
console.log(arr[1])
console.log(arr[2])

//terversing 
var arr = [
    [70,80,90,95],
    [75,86,92,89],
    [50,90,95,98]
]
for(var i=0; i<arr.length;i++){
    for(var j=0; j<arr[i].length; j++){
        console.log('Element ' + i +' : ' + arr[i][j])
    }
}
