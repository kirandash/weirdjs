function b(){
	var testvar;
	console.log(testvar);//Local variable
}

function a(){
	var testvar = 2;//Local variable
	console.log(testvar);
	b();
}

console.log(testvar);
var testvar = 1; //Global variable
console.log(testvar);
a();
console.log(testvar);