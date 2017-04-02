// Call, apply and bind
var person = {
	firstname: 'Kiran',
	lastname: 'Dash',
	createFullName: function(){
		var fullname = this.firstname + ' ' + this.lastname; //this here refers to person object
		return fullname;
	}
}

var logName = function(lang1, lang2){
	console.log('Logged Name: ' + this.createFullName());
	console.log('Arguments: ' + lang1 + ' ' + lang2);
	console.log('--------------');
}//this.createFullName - here this is global object but createFullName is in person object not global

//logName();

var logPerson = logName.bind(person);//The bind method returns a new function with referece to the person object as this

logPerson('en','fr');

var logName2 = function(lang1, lang2){
	console.log('Logged Name: ' + this.createFullName());
	console.log('Arguments: ' + lang1 + ' ' + lang2);
	console.log('--------------');
}.bind(person);//bind can be attached to fn on fly

logName2('nl','gk');//This now runs a copy of logName2 fn with person as this object

logName.call(person, 'eu','tr');//Call does the same as bind - sets reference for this and also we can pass parameters - unlike bind it executes the fn straight away

logName.apply(person, ['eu','tr']); //Apply also is same - but it excepts array of parameters

(function(lang1, lang2){
	console.log('Logged Name: ' + this.createFullName());
	console.log('Arguments: ' + lang1 + ' ' + lang2);
	console.log('--------------');
}).apply(person, ['eu','tr']);//apply can be attached to fn on fly but it should be in () since it is an IIFE

//EXAMPLES
//Function borrowing
var person2 = {
	firstname: 'Shyam',
	lastname: 'Dash'
}

console.log(person.createFullName.apply(person2));

//Function currying - Creating a copy of a fn with some preset parameters - very useful in mathematical situations
function multiply(a, b){
	return a*b;
}

var multiplyByTwo = multiply.bind(this, 2);//Permanently set a as 2

var multiplyTwonThree = multiply.bind(this, 2, 3); //Always a and b will be 2 and 3

console.log(multiplyByTwo(3));

console.log(multiplyTwonThree(4));

//Above one is same as 
function multiplyByThree(a, b){
	a = 3;
	return a*b;
}

console.log(multiplyByThree(2,3));