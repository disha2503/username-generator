console.log("Welcome to Js world");
//  let var const concept
let x1 = 1;
if (x1===1){ //checks whether x is equal to 1
    let x1 = 2;
    console.log(x1);
}


var x2 = 1;
if (x2===1){
    let x2=3;
    console.log(x2);
}

const x3 = 1;
if (x3===1){
    let x3=3;
    console.log(x2);
}


// String
let str = "hello geeks";
console.log(str);

// Number
const num = 10;
console.log(num);

// Boolean
const x = "true";
console.log(x);

// Undefined
let name;
console.log(name );

// Null
const number = null;
console.log(number);

// Symbol
const value1 = Symbol("hello");
const value2 = Symbol("hello");
console.log(value1);
console.log(value2);

// Here both values are different 
// as they are symbol type which 
// is immutable object
const object = {
    firstName: "geek",
    lastName: null,
    batch: 2,
};
console.log(object);

