// For in array - drawbacks
Array.prototype.myCustomFeature = 'cool';

var arr = ['Kiran', 'Raju', 'Shyam'];

for(var prop in arr){
	console.log(prop + ': ' + arr[prop]);
}
// For in also includes properties from global prototypes - SO DO NOT USE FOR IN WITH ARRAYS
// For in loops over properties so do not use it

//Use Standard for loop
for(i=0;i<arr.length;i++){
	console.log(arr[i]);
}