//Existence and Boolean
console.log(Boolean(undefined));

console.log(Boolean(null));

console.log(Boolean(""));

//All the above values have lack of existence and thus coercion of them returns false

var a = 0;

if (a || a === 0){
	console.log('Something is there');
}