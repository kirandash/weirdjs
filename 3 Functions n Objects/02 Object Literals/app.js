//Object and dot
var person = { 
	firstName: "Kiran", 
	midName: "Kumar", 
	lastName: "Dash",
	address: {
		state: "telangana",
		city: "hyderabad",
		pin: "764059"
	}
};

greet2({
	firstName: "Rajendra", 
	midName: "Kumar"	
});

person.addressmore = {
	street: "BS Makhta"
}


function greet(personobj){
	console.log('Hi ' + personobj.firstName);
	console.log('Your address is ' + personobj.address.state);
	console.log('Your address is ' + personobj.addressmore.street);
}

function greet2(personobj){
	console.log('Hi ' + personobj.firstName);
}

greet(person);

console.log(person);