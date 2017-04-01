// Closures - Examples
function buildFunctions(){
	var arr = [];
	for(var i = 0; i<3; i++){
		arr.push(
			function(){
				console.log(i);
			}//Function expression creation
		)
	}

	return arr;
}

var fs = buildFunctions();

fs[0]();//Fn invocation
fs[1]();
fs[2]();//They all return 3

console.log('---------');

function buildFunctions2(){
	var arr = [];
	for(var i = 0; i<3; i++){
		let j = i;//separately staged variable - ES6
		arr.push(
			function(){
				console.log(j);
			}//Function expression creation
		)
	}

	return arr;
}

var fs2 = buildFunctions2();

fs2[0]();//Fn invocation
fs2[1]();
fs2[2]();//They all return 3

console.log('---------');

function buildFunctions3(){
	var arr = [];
	for(var i = 0; i<3; i++){
		arr.push(
			(function(j){
				return function(){
					console.log(j);
				}//Return the function - pushed to array
			}(i))//IIF is the right way to have access to i on fly
		)
	}

	return arr;
}

var fs3 = buildFunctions3();

fs3[0]();//Fn invocation
fs3[1]();
fs3[2]();//They all return 3