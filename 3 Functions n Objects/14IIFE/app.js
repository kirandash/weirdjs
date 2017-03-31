// IIFEs
function greet(name){
	console.log('Hello ' + name);
}//Fn statement

greet('Kiran');//Fn invoked

var greetFunc = function(name){
	console.log('Hello ' + name);
}//Fn expression or a fn literal created on fly

greetFunc('Rajendra');//Fn invokeed

console.log(greetFunc);

var greetIFunc = function(name){
	console.log('Hello ' + name);
}('Rameshwar');//Function Expression is immediately invoked --- IMPORTANT

console.log(greetIFunc);//Undefined since anonymous function

var greetIFunc2 = function(name){
	return 'Hello ' + name;
}();

//console.log(greetIFunc2()); //error since the greetIFunc2 is IIFE

3;//Does nothing

/*function(name){
	console.log('Hello ' + name);
}*/ //Function expression can't sit alone without being assigned to a variable

(function(name){
	return 'Hello ' + name;
});//Function expression to sit alone must be wrapped inside paranthesis - since JS detects anything inside paranthesis as expression e.g. (a+b), (c-d) //Nothing happens here

var fsName = 'Ladli';

(function(name){
	var greeting = 'Hello';
	console.log(greeting + ' ' + name);
})(fsName); //FE created on fly and immediately invoked --- IMPORTANT -- This syntax has invocation outside the expression

//Another Syntax
(function(name){
	var greeting = 'Hello';
	console.log(greeting + ' ' + name);
}(fsName)); //FE created on fly and immediately invoked --- IMPORTANT -- This syntax has invocation inside the expression