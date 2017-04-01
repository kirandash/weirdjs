//JSON vs Object Literals
var objectLiterals = {
	firstName: 'Kiran',
	midName: 'Kumar',
	lastName: 'Dash'
}

console.log(JSON.stringify(objectLiterals)); //OL to JSON

/*<object>
	<firstName>Kiran</firstName>
	<midName>Kumar</midName>
	<lastName>Dash</lastName>
</object>
Above format takes more space so JSON was found
*/

var jsonString = JSON.parse('{	"firstName": "Kiran","midName": "Kumar","lastName": "Dash" }');

console.log(jsonString);//JSON to OL

//JSON - Quote is must for properties - optional in Ojbect Literals
//All valid JSONs are valid OL but all valid OLs are not valid JSONs - JSONs are stricter