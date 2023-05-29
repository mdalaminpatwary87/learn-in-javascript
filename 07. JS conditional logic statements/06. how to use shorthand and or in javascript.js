// Example 01 => using if,else
var name = '';
var fullName = '';
if(name.length == 0){
    fullName = 'AHmd HriDoy';
}else{
    fullName = name;
};
console.log(fullName);

// Example 02 => using if,else
var name = 'Ratul Sinha';
var fullName = '';
if (name.length == 0){
    fullName = 'AHmd HriDoy'
}else{
    fullName = name;
}
console.log(fullName);

// shorthand '(||)or'
var name = "";
var fullName = name || 'Rocky';
console.log(fullName);

var name = "prity"; 
var fullName = name || 'ROcky';
console.log(fullName);

// shorthand '&&(AND)'
var isOk = true;
if (isOk){
    console.log('Login Successfully');
};

var isOk = true;
isOk && console.log('Login Successfully');