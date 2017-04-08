// Function constructors - Good to always start with capital letter
function Person(fn, ln){
	console.log(this);
	this.firstname = fn || 'Kiran';
	this.lastname = ln || 'Dash';
	console.log('This function is invoked');
}


//console.log(Person);

Person.prototype.createFullName = function(){
	return this.firstname + ' ' + this.lastname;
};

var kk = new Person(); 
console.log(kk);

//The capital letter will let you distinguish between a function and an object. And find out missing new keyword
var cd = new Person('Chinu', 'Dash'); 

//var cd = Person('Chinu', 'Dash');  //Error

console.log(cd);

console.log(kk.createFullName());

console.log(cd.createFullName());

//prototype can be attached even after creating the objects
Person.prototype.createFormalFullName = function(){
	return this.lastname + ' ' + this.firstname;
};

console.log(kk.createFormalFullName());

console.log(cd.createFormalFullName());