//Array
//var arr = new Array();
var arr = [
			1,
			false,
			3,
			{
				name: 'Kiran Dash',
				age: 25
			},
			function(name){
				var message = 'Hello ' + name;
				console.log(message);
			},
			"string here"
];

console.log(arr);
arr[4](arr[3].name);