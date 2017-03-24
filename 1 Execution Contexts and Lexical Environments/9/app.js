//long running function 
function threeSec(){
	var ms = 3000 + new Date().getTime();
	while(new Date() < ms){}
	console.log('Finished executing long function');
}

function clickHandler(){
	console.log('Click event!');
}

//Listen for click event
document.addEventListener('click', clickHandler); //The click event is queued after the execution context of global environment is done

threeSec();
console.log('Finished executing all');