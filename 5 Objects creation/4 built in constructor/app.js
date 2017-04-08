// Built in constructor
var a = new Number(3);
console.log(a); //Fn creates an object
console.log(a.toFixed());

var b = new String("Kiran");
console.log(b); //Fn creates an object
console.log(b.indexOf("K"));
console.log(b.indexOf("Ak"));
console.log(String.prototype.indexOf("i"));
console.log("kiran".length);//fns that can be used with primitives
console.log(new String("kiran dash").length);

var c = new Date("3/11/2017");
console.log(c); //Fn creates an object

// Add a method for all strings in JS
String.prototype.isLengthGreaterThan = function(limit){
	return this.length > limit;
}

console.log("kiran".isLengthGreaterThan(3)); // String auto converted to object and then run the method from prototype

// Creating a method for all numbers
Number.prototype.isNumberGreaterThan = function(limit){
	return this > limit;
}

//console.log(3.isNumberGreaterThan(2)); //Error since - JS wont convert number to object automatically

var d = new Number(3); // Object created

console.log(d.isNumberGreaterThan(2)); // This will work since we are creating an object in first hand