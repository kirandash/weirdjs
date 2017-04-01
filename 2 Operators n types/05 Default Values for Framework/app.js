//Default Values
function hello(name){
	name = name || "<default name here>"; //OR can be used to set a default value
	console.log('Hello '+ name);
}

hello('Tony');
hello();
hello(0);