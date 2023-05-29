/*====================================================================================================================================================
Sorting an Array => sort() method sorts an array alphabetically.
=====================================================================================================================================================*/
var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.sort())

//-----or another ways-----// 
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort()
console.log(fruits)


/*====================================================================================================================================================
Reversing an Array => reverse() method reverses the elements in an array. we can use it to sort an array in descending order:
=====================================================================================================================================================*/
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort()
console.log(fruits.reverse())

//-----or another ways-----// 
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort()
fruits.reverse()
console.log(fruits)

//-----compare sort() & reverse()-----// 
var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits); // return orginial array
fruits.sort(); 
console.log(fruits); // return sort array accending order alphabetically.
fruits.reverse();
console.log(fruits) // return reverse array decending order alphabetically.

/*====================================================================================================================================================
Numeric Sort => 
            01. By default, the sort() function sorts values as strings. Like ("Apple" comes before "Banana").

However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1". 
Because of this, the sort() method will produce incorrect result when sorting numbers.
=====================================================================================================================================================*/
var points = [25, 100, 2, 1, 25, 10];
points.sort()
console.log(points)

var points = ['25', '100', '2', '1', '25', '10'];
points.sort()
console.log(points)

var points = ['25', '100', '2', '1'];
points.sort()
console.log(points)

//-------But we can fix this by providing a compare function------//
var points = [25, 100, 2, 1, 25, 10];
points.sort(function(a,b){
    return a - b
})
console.log(points)

//-------Use the same trick to sort an array descending------//
var points = [25, 100, 2, 1, 25, 10];
points.sort(function(a,b){
    return b - a
})
console.log(points)

/*====================================================================================================================================================
Above the example explanation => This is called compare function.
    01. The purpose of the compare function is to define an alternative sort order.
    02. The compare function should return a negative, zero, or positive value, depending on the arguments.
            function(a, b){return a - b}

    03. When the sort() function compares two values, it sends the values to the compare function, and sorts the values according to the returned (negative, zero, positive) value.
            01. If the result is negative a is sorted before b.
            02. If the result is positive b is sorted before a.
            03. If the result is 0 no changes are done with the sort order of the two values. [ref visit file : 15]
=====================================================================================================================================================*/

/*====================================================================================================================================================
Sorting an Array in Random Order 
=====================================================================================================================================================*/
var points = [40, 100, 1, 5, 25, 10];
points.sort(function(){
    return 0.5 - Math.random()
});
console.log(points)

/*====================================================================================================================================================
The Fisher Yates Method => The above example, array.sort(), is not accurate, it will favor some numbers over the others.
The most popular correct method, is called the Fisher Yates shuffle, and was introduced in data science as early as 1938!
In JavaScript the method can be translated to this:
=====================================================================================================================================================*/
var points = [40, 100, 1, 5, 25, 10];

for (var i = points.length -1; i > 0; i--) {
  var j = Math.floor(Math.random() * i)
  var k = points[i]
  points[i] = points[j]
  points[j] = k
}
console.log(points)

/*====================================================================================================================================================
Find the Highest (or Lowest) Array Value => 
=====================================================================================================================================================*/

