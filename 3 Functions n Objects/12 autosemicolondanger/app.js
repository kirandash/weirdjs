//Danger of auto semicolon insertion
function getPerson(){
	return //enter after return will auto add a semicolon
	 {
	 	firstname: 'Kiran'
	 }
}

function getPerson2(){
	return {
	 	firstname: 'Kiran'
	 }
}

console.log(getPerson());//returns undefined

console.log(getPerson2());//returns object literal - Best practice to have { on the same line