//By values (primitives)
var a = 3;
var b;
b = a;

console.log(a);
console.log(b); //Both a and b will be 3 but they will be copies of each other in memory space

a = 2; //This wont effect b since b is just a copy of a

console.log(a);
console.log(b); 

//By reference (all objects including functions)
var c = {greetings: 'hi'};
var d;

d = c;

console.log(c);
console.log(d); 

c.greetings = 'new hello'; //This Mutatuion will effect d because both c and d has the same reference

console.log(c);
console.log(d);

//by reference (as parameters)
function changeGreeting(obj){
	obj.greetings = 'another new hello';
}

changeGreeting(d);

console.log(c);
console.log(d);

//Equal operator sets up a new memory space
c = { greetings: "New Howdy" };//C modified with equal operator and thus wont effect d - brand new object
console.log(c);
console.log(d);