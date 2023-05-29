/*====================================================================================================================================================           
add()	                    Adds a new element to the Set
delete()	                Removes an element from a Set
has()	                    Returns true if a value exists in the Set
clear()	                    Removes all elements from a Set.
forEach()	                Invokes a callback for each element in the Set
values()	                Returns an iterator with all the values in a Set
keys()	                    Same as values() 
entries()	                Returns an Iterator with the [value,value] pairs from a Set
======================================================================================================================================================*/
// add() => adds a new element to the Set
var mySet = new Set();
mySet.add('a');
mySet.add('b');
mySet.add('c');
console.log(mySet);

// add() => if you add equal elements, only the first will be saved
var mySet = new Set();
mySet.add('a');
mySet.add('a');
mySet.add('b');
mySet.add('b');  
mySet.add('c');
mySet.add('c');
console.log(mySet);

// delete() => Removes an element from a Set
var mySet = new Set(['a','b','c','d']);
mySet.delete('a');
mySet.delete('b');
console.log(mySet);

// has() => Returns true if a value exists in the Set
var mySet = new Set(['a','b','c','d']);
console.log(mySet.has('a'));
console.log(mySet.has('f'));

// clear() => Removes all elements from a Set.
var mySet = new Set(['a','b','c','d']);
mySet.clear();
console.log(mySet);

// forEach() => Invokes a callback for each element in the Set
var mySet = new Set(['a','b','c','d']);
mySet.forEach(function(value){
    console.log(value);
});

// values() => Returns an iterator with all the values in a Set. Returns [object Set Iterator]
var mySet = new Set(["a","b","c",'d']);
mySet.values();
console.log(mySet);

// iterables can be iterated over with for..of loops
var mySet = new Set(["a","b","c",'d']);
mySet.values();
for(var i of mySet){
    console.log(i);
};

// keys() => A Set has no keys. keys() returns the same as values(). Returns [object Set Iterator]
var mySet = new Set(["a","b","c",'d']);
mySet.keys();
console.log(mySet);

// entries() => A Set has no keys. entries() returns [value,value] pairs instead of [key,value] pairs.
var mySet = new Set(["a","b","c",'d']);
var entries = mySet.entries();
console.log(entries);

var mySet = new Set(["a","b","c",'d']);
var entries = mySet.entries();
for(var i of entries){
    console.log(i);
};