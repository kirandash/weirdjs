// strict mode
"use strict"; //Add extra strict rules - It must be at top of code or top of fn

var person;
//A variable must be declared first
//persom = {};
//console.log(persom);
person = {};
console.log(person);

function testperson(){
	"use strict";

	var person2;
	/*persom2 = {};
	console.log(persom2);*/
}

testperson();

// use strict is not exactly same for all browsers