// typeof - returns a string and instanceof - checks if there is an istance exists
var a = 3;
console.log(typeof a);//number primitive

var b = 'Kiran';
console.log(typeof b);//string primitive

var c = {};
console.log(typeof c);//object

var d = [];
console.log(typeof d);//object - arrays are also objects - weird
console.log(Object.prototype.toString.call(d)); // better!

function Person(name){
  this.name = 'Kiran';
}

var e = new Person('rama');
console.log(typeof e);
console.log(e instanceof Person); //Checks if there is any instance of Person down the prototype chain for e

console.log(typeof undefined); // useful
console.log(typeof null); // A bug since forever

var f = function(){

}

console.log(typeof f);