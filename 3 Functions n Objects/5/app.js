//First Class Functions
//Can be assigned to variables, pass them around, create them on the fly
function greet() {
	console.log('Hi');
}

greet.language = 'english';//Functions are objects. This is a property attached to greet function

console.log(greet);

console.log(greet.language); //Functions are objects

greet();//Invocable functions