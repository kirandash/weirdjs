// Built in constructor
var a = 5;
var b = new Number(5);

console.log(a == b);
console.log(a === b); // So both are not same - built in fn thus can be dangerous

// https://momentjs.com/ - for date related work better to use this so that built in fn errors dont happen