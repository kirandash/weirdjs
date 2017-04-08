// Function constructors - A function that is used to construct objects - this variable points to a new empty object, and that object is returned from the function automatically
function Person(fn, ln){
	console.log(this);
	this.firstname = fn || 'Kiran';
	this.lastname = ln || 'Dash';
	console.log('This function is invoked');

	//return { message: 'This line is getting in the way of creating object'};
}

//In most codes, properties are created inside function constructors while the methods are created with prototype (Because if function sits inside fn constructors then each of it will take space. So 1000 objects will have 1000 fn space. But with prototype it is just once for all objects. Properties sit inside constructors because it needs to have different value for different objects. But methods dont, they are the same for all objects)

//console.log(Person);

Person.prototype.createFullName = function(){
	return this.firstname + ' ' + this.lastname;
};

var kk = new Person(); //new is an operator that creates an empty object and then firstname and lastname are added to that empty object
console.log(kk);

var cd = new Person('Chinu', 'Dash'); 
console.log(cd);

console.log(kk.createFullName());

console.log(cd.createFullName());

//prototype can be attached even after creating the objects
Person.prototype.createFormalFullName = function(){
	return this.lastname + ' ' + this.firstname;
};

console.log(kk.createFormalFullName());

console.log(cd.createFormalFullName());