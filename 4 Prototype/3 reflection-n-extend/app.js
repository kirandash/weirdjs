// Reflection - 
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

for(var prop in kiran){
	// For in here gets data for both object's and it's prototype's properties
	console.log(prop + ': ' + kiran[prop]);//also can use kiran.prop	
}

// Check only for object's properties not it's prototype - Using hasOwnProperty
for(var prop in kiran){
	if(kiran.hasOwnProperty(prop)){
		console.log(prop + ': ' + kiran[prop]);
	}
}

var mama = {
	address: 'Hyderabad',
	createReverseFullName: function(){
		return this.firstname + ', ' + this.lastname;
	}
}

var lado = {
	createFirstName: function(){
		return 'Mr./Mrs. ' + this.firstname;
	}
}

//Instead of adding mama and lado to prototype chain let's use extend feature from _s
_.extend(kiran,mama,lado); // This adds all the properties from mama and lado directly into kiran object not it's prototype

console.log(kiran);