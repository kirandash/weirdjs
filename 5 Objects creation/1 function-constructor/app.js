// Function constructors - A function that is used to construct objects - this variable points to a new empty object, and that object is returned from the function automatically
function Person(fn, ln){
	console.log(this);
	this.firstname = fn || 'Kiran';
	this.lastname = ln || 'Dash';
	console.log('This function is invoked');

	//return { message: 'This line is getting in the way of creating object'};
}

//console.log(Person);

var kk = new Person(); //new is an operator that creates an empty object and then firstname and lastname are added to that empty object
console.log(kk);

var cd = new Person('Chinu', 'Dash'); 
console.log(cd);