//Function statements and function expressions

statem();//Call function statement with it's name

function statem(){
	console.log('This is a function statement');
}//This function has a name and some code

//anonymousexpression();//This will return an array - because of hoisting

var anonymousexpression = function(){
	console.log('This is a function expression');
}//This fn is anonymous and does not have a name - can assign a name but not required since variable can be used

anonymousexpression(); //Since the anonymous function is assigned to a variable, it can be invoced using the variable name

//Functions assigned to variable must be called after the function is defined

function log(a){
	console.log(a);
}

log(3);//Value passed on fly
log("Hello!");

log({
	greeting: 'hi'
});//Function invocation with object creation on fly

function log2(a){
	a();//Invoce the function passed from another function
}

log2(function(){
	console.log('hi');
});//Most like an Object Literal - Function created on a fly