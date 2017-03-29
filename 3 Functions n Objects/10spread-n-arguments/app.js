//Spread - Arguments
//arguments is a special keyword contains a list of all the parameters passed to a function
function greet(firstname, lastname, message, ...extra){
//function greet(firstname, lastname, message = "hello"){ //define default value - not for all browsers
	message = message || "default hello"; //Default value for parameters

	if(arguments.length === 0){ //Not an array but has a length property
		console.log('Missing parameters!');
		console.log("--------------------");
		return; //do not execute the code further and return out of the function
	}

	console.log(firstname);
	console.log(lastname);
	console.log(message);
	console.log(arguments);//Array like list of all parameters passed
	console.log(arguments[0]);
	console.log('extra parameters: ' + extra); //...extra holds all the extra parameters in an array. Not available yet in all browsers
	console.log("--------------------");
}

greet(); //returns undefined and not error because of hoisting
greet('Kiran');//First one is assigned the value but other 2 are undefined
greet('Kiran', 'Dash', 'Hello');
greet('Kiran', 'Dash', 'Hello', 25, 'Hyderabad', 'Street 1');