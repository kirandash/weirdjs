//Function Overloading - Easy in JS
function greet(firstname, lastname, language){
	language = language || "en";
	if(language === "en") {
		console.log('Good Morning ' + firstname + ' ' + lastname);
	}
	if(language === "hindi") {
		console.log('Namaste ' + firstname + ' ' + lastname);
	}
}

greet('Kiran', 'Dash');
greet('Kiran', 'Das', 'en');
greet('Kiran', 'Dash', 'hindi');

//Simpler Function Calls - To avoid Function overloading
function greetEnglish(firstname, lastname){
	console.log('Good Morning ' + firstname + ' ' + lastname);
}

function greetHindi(firstname, lastname){
	console.log('Namaste ' + firstname + ' ' + lastname);
}

greetEnglish('Kiran', 'Dash');
greetHindi('Kiran', 'Dash');