//Functions, Objects and this
//Execution context - variable creation, outer environment and this
console.log(this); //Global window object

function a(){
	console.log(this); //Global window object
	this.newVariable = 'hello'; //Variable attached to global object
}

var b = function(){
	console.log(this); //Global window object
}

a();

console.log(newVariable);//variable attached to global object dont need a dot operator

b();

var c = {
	name: 'The string here',
	log: function() {
		var self = this;
		this.name = "Updated string here";  //This inside function in an object points to the object
		console.log(this); //Points to the object this method is lexical

		var setname = function(newname){
			//this.name = newname; //The internal function adds the name to global or window object
			//Function inside function in an object - this has reference to global window object
			self.name = newname; //Now this is coming from self which is pointing to the object
		}
		setname('Updated again! The c object');
		console.log(this);
	}
};

c.log();