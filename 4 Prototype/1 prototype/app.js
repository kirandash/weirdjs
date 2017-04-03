//Prototype - Prototype has all object properties - JS always looks for a prototype chain
var person = {
	firstname: 'Default',
	lastname: 'Default',
	createFullName: function(){
		return this.firstname + ' ' + this.lastname;
	}
}

var kiran = {
	firstname: 'Kiran',
	lastname: 'Dash'
}

//Don't do this ever!
kiran.__proto__ = person;
console.log(kiran.createFullName());
console.log(person);
console.log(kiran);
console.log(kiran.firstname); //starts at top of proto chain and stops when it gets what it is looking for

//Don't do this ever!
var mama = {
	firstname: 'Mama'
}

mama.__proto__ = person;
console.log(mama.createFullName());