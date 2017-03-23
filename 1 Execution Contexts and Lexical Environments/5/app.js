//Undefined - a special keyword in JS
var a;
//var a = 'Hello World!';
console.log(a);

//Never set a = undefined; it might be dangerous
//Undefined is thus a special value or keyword that variables recieve in the creation phase of execution context

if(a === undefined){
	console.log('a is not defined!');
}else{
	console.log('a is defined.');
}