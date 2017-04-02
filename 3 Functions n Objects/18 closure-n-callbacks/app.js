// Closures and Callbacks
function delayedHi(){
	var message = 'Hi';

	setTimeout(function(){
		console.log(message);
	}//This is a callback fn - which is called when setTmeout is done
	, 3000);//SetTimeout takes a fn object and uses it as a parameter, that is First class fn in JS - Also Functon is created on fly so it is a Fn Expression
}

delayedHi();

//jQuery using First class function and fn expression
$("button").click(function(){

});

//Callback fn - A fn that you give to another fn, to be run when the other fn is finished
//So the fn you call or invoke, 'calls back' by calling the fn you gave it when it finishes
function onDone(callback){
	var a = 100;
	var b = 200;
	callback();
}

onDone(function(){
	console.log('The fn is exectued');
});

onDone(function(){
	console.log('Another callback fn is exectued');
});