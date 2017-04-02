//Underscore js - Functional Programming
var arr1 = [1,4,9];
var arr2 = _.map(arr1, function(item){ return item * 3 }); //Multiply each item with 3
console.log(arr2);

var arr3 = _.filter([2,3,4,5,6,7], function(item){ return item % 2 === 0 }); //Return all items that are divisible by 2

console.log(arr3);

var arr4 = _.filter(arr1, function(item){ return item % 2 === 0 }); //Return all items that are divisible by 2

console.log(arr4);