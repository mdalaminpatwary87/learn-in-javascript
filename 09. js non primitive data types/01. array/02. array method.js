/*====================================================================================================================================================
Converting Arrays to Strings => The JavaScript method toString() converts an array to a string of (comma separated) array values.
======================================================================================================================================================*/
var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.toString())

// Now how to check data type.
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var checkString = fruits.toString()
console.log(checkString) 
console.log(typeof checkString) 
console.log(typeof fruits.toString()) // another way to check data type.

/*====================================================================================================================================================
The join() method also joins all array elements into a string. It behaves just like toString(), but in addition you can specify the separator:
======================================================================================================================================================*/
var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.join(' * '))

/*====================================================================================================================================================
Popping and Pushing => When you work with arrays, it is easy to Remove elements and add new elements. Popping items out of an array, or pushing items into an array.

pop() => 
        01. The pop() method removes the last element from an array.
        02. The pop() method returns the value that was "popped out"
push() => 
        01. The push() method adds a new element to an array (at the end).
        02. The push() method returns the new array length.
======================================================================================================================================================*/
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop()
console.log(fruits)

// The pop() method returns the value that was "popped out".
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var fruit = fruits.pop()
console.log(fruit) // return pop item.
console.log(fruits)

//===push()==//
var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits); // return original array

fruits.push("Kiwi");
console.log(fruits) // return update pushing array

// The push() method returns the new array length.
var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.length);

var length = fruits.push("Kiwi");
console.log(length);

/*====================================================================================================================================================
 length properties => The length property provides an easy way to append a new element to an array.
======================================================================================================================================================*/
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[fruits.length] = "Kiwi";
console.log(fruits)

/*====================================================================================================================================================
Shifting Elements => Shifting is equivalent to popping, but working on the first element instead of the last.

shift() => 
        01. The shift() method removes the first array element and "shifts" all other elements to a lower index.
        02. The shift() method returns the value that was "shifted out":
======================================================================================================================================================*/
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift();
console.log(fruits)


// The shift() method returns the value that was "shifted out".
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var fruit = fruits.shift();
console.log(fruit);

/*====================================================================================================================================================
unshift() =>
            01. The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements.
            02. The unshift() method returns the new array length.
======================================================================================================================================================*/
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon");
console.log(fruits)

// The unshift() method returns the new array length.
var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.length)

var fruit = fruits.unshift("Lemon");
console.log(fruit);

/*====================================================================================================================================================
Changing Elements => Array elements are accessed using their index number:
Array indexes start with 0:
                        [0] is the first array element
                        [1] is the second
                        [2] is the third ...
======================================================================================================================================================*/
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[0] =  "Kiwi";
console.log(fruits)

/*====================================================================================================================================================
delete() => Warning !
        01. Array elements can be deleted using the JavaScript operator delete.
        02. Using delete leaves undefined holes in the array.
        03. Use pop() or shift() instead.
======================================================================================================================================================*/
var fruits = ["Banana", "Orange", "Apple", "Mango"];
delete fruits[0] 
console.log(fruits)
console.log(fruits[0]) // Using delete leaves undefined holes in the array

/*====================================================================================================================================================
Merging (Concatenating) Arrays =>
                                01. The concat() method creates a new array by merging (concatenating) existing arrays:
                                02. The concat() method does not change the existing arrays. It always returns a new array.
                                03. The concat() method can take any number of array arguments.
======================================================================================================================================================*/
var myGirls = ["Cecilie", "Lone"];
var myBoys = ["Emil", "Tobias", "Linus"];

var myChildren = myGirls.concat(myBoys);
console.log(myChildren)

// The concat() method can take any number of array arguments. Merging Three Arrays
var arr1 = ["Cecilie", "Lone"];
var arr2 = ["Emil", "Tobias", "Linus"];
var arr3 = ["Robin", "Morgan"];
var myChildren = arr1.concat(arr2, arr3);
console.log(myChildren)

// The concat() method can also take strings as arguments. Merging an Array with Values
var arr1 = ["Emil", "Tobias", "Linus"];
var myChildren = arr1.concat("Peter"); 
console.log(myChildren)

/*====================================================================================================================================================
Splicing and Slicing Arrays => 
                        01. The splice() method adds new items to an array.
                        02. The slice() method slices out a piece of an array.
splice() => The splice() method can be used to add new items to an array.
            Note:
            01. First parameter (2) defines the position where new elements should be added (spliced in).
            02. second parameter (0) defines how many elements should be removed.
            03. The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.
======================================================================================================================================================*/
var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits)

fruits.splice(2, 0, "Lemon", "Kiwi"); // add new items to an array.
console.log(fruits)

// The splice() method returns an array with the deleted items:
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits)

fruits.splice(2, 2, "Lemon", "Kiwi");
console.log(fruits)

// return Removed Items. 
const fruits = ["Banana", "Orange", "Apple", "Mango"];
var removed =  fruits.splice(2, 2, "Lemon", "Kiwi");
console.log(removed)

/*====================================================================================================================================================
Using splice() to Remove Elements => With clever parameter setting, you can use splice() to remove elements without leaving "holes" in the array.
                        01. The first parameter (0) defines the position where new elements should be added (spliced in).
                        02. The second parameter (1) defines how many elements should be removed.
                        03. The rest of the parameters are omitted. No new elements will be added.
======================================================================================================================================================*/
var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits);

fruits.splice(0, 1);
console.log(fruits);

/*====================================================================================================================================================
slice() => The slice() method slices out a piece of an array into a new array.
Note: 
        01. The slice() method creates a new array.
        02. The slice() method does not remove any elements from the source array.

=====================================================================================================================================================*/
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
console.log(fruits);

var citrus = fruits.slice();
console.log(citrus);

//This example slices out a part of an array starting from array element 3 ("Apple")
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(3);
console.log(citrus);

// The slice() method can take two arguments like slice(1, 3). The method then selects elements from the start argument, and up to (but not including) the end argument.
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(1, 3);
console.log(citrus);

// If the end argument is omitted, like in the first examples, the slice() method slices out the rest of the array.
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(2);
console.log(citrus);


/*====================================================================================================================================================
Automatic toString() => JavaScript automatically converts an array to a comma separated string when a primitive value is expected.
This is always the case when you try to output an array. These two examples will produce the same result:
Example 1:
        const fruits = ["Banana", "Orange", "Apple", "Mango"];
        document.getElementById("demo").innerHTML = fruits.toString();
Example same as Example 1:
        const fruits = ["Banana", "Orange", "Apple", "Mango"];
        document.getElementById("demo").innerHTML = fruits;
Note
All JavaScript objects have a toString() method.
=====================================================================================================================================================*/

/*====================================================================================================================================================
Finding Max and Min Values in an Array => There are no built-in functions for finding the highest or lowest value in a JavaScript array.You will learn how you solve this problem in the next chapter of this tutorial
=====================================================================================================================================================*/




  








