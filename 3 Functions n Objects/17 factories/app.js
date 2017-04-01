// Factories
function makeMessage(language) {
	return function(firstname, lastname){
		if(language == 'en'){
			console.log('Hello ' + firstname + ' ' + lastname);
		}
		if(language == 'hindi'){
			console.log('Namaskaar ' + firstname + ' ' + lastname);
		}
	}
}

var messageEnglish = makeMessage('en');
var messageHindi = makeMessage('hindi');//Both functions lexically sit inside makeMessage but does point to different memory space (2 different execution context)

//makeMessage works as factory function taking advantage of closures

messageEnglish('Kiran','Dash');
messageHindi('Chinmayi','Dash');