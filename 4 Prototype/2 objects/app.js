// Objects
var a = {};
var b = function(){};
var c = [];

console.log(a.__proto__); // object - last item on prototype chain
console.log(b.__proto__);// empty function
console.log(b.__proto__.__proto__); // object - last item on prototype chain
console.log(c.__proto__);// empty array
console.log(c.__proto__.__proto__); // object - last item on prototype chain