// Functional Programming
var arr1 = [1,2,3];
console.log(arr1);

var arr2 = [];
for(var i=0; i<arr1.length; i++){
	arr2.push(arr1[i] * 2);
}
console.log(arr2);

//Limit repetition with Functions
function mapforeach(arr, fn){
	var newArray = [];
	for(var i=0; i<arr.length; i++){
		newArray.push(
			fn(arr[i])
		);
	}
	return newArray;
}//One fn can be used multiple times

var arr3 = mapforeach(arr1, function(item){
	return item*2;
});

console.log(arr3);

var arr4 = mapforeach(arr1, function(item){
	return item>2;
});

console.log(arr4);

var checkPastLimit = function(limiter, item){
	return item > limiter;
}

//Use bind to preset one parameter the limiter since mapforeach has just one parameter
var arr5 = mapforeach(arr1, checkPastLimit.bind(this, 1)); //1 is limiter

console.log(arr5);

var arr6 = mapforeach(arr1, checkPastLimit.bind(this, 2)); //2 is limiter

console.log(arr6);

//Simplified function without using bind all the time
var checkPastLimitSimplified = function(limiter){
	return function(limiter, item){
		return item>limiter;
	}.bind(this, limiter);
}

var arr7 = mapforeach(arr1, checkPastLimitSimplified(2));

console.log(arr7);