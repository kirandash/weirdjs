//Faking Namespace - Try to avoid namespace collisions in framework with the help of object
//Namespace is a container for variables and functions - typically to keep variables and functions with the same name separate
var greet = 'a';
var greet = 'b';

console.log(greet);

var english = {
	greetings: {
		basic: 'Hello'
	}
};//Multilevel objects are better

var spansih = {};

spansih.greet = 'Hello 2';

console.log(english);
console.log(spansih);