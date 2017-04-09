// Object.create - pure prototype inheritance
// Polyfill
if (typeof Object.create != 'function') {
  Object.create = (function(undefined) {
    var Temp = function() {};
    return function (prototype, propertiesObject) {
      if(prototype !== Object(prototype)) {
        throw TypeError(
          'Argument must be an object, or null'
        );
      }
      Temp.prototype = prototype || {};
      var result = new Temp();
      Temp.prototype = null;
      if (propertiesObject !== undefined) {
        Object.defineProperties(result, propertiesObject); 
      } 
      
      // to imitate the case of Object.create(null)
      if(prototype === null) {
         result.__proto__ = null;
      } 
      return result;
    };
  })();
}

var person = {
	firstname: 'Default',
	lastname: 'Default',
	message: function(){
		return 'Hello: ' + this.firstname + ' ' + this.lastname;//this points to person firstname - without this it will look for firstname in fn and global and return error
	}
}

var kiran = Object.create(person); // It creates an empty object with all the properties set to prototype
//This is pure prototypal inheritance
//It is only for new browsers and thus must use a polyfill(code that adds a feature which the engine may lack)
console.log(kiran);

kiran.firstname = 'Kiran';
kiran.lastname = 'Dash';// Overwrite existing properties by just creating new ones

console.log(kiran);