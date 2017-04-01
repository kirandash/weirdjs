// Closures
function message(whattosay){
	return function(name){
		console.log(whattosay + ' ' + name);
	}//
}

message('Hello')('Kiran');

var sayhello = message('Hello');//message function execution is finished here but the returned values from here are saved in space
sayhello('Rajendra');//This has access or relation to the value returned from message fn since it is lexically sitting inside it. This case is called a closure.