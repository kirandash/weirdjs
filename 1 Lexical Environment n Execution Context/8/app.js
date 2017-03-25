//Function b is lexically sitting at global level
function b(){
	console.log(myvar);
}

function a(){
	var myvar = 2;
	b();//No matter where the function is invoked, it's outer environment/reference is going to be based on where it is lexically sitting
}

var myvar = 1;
a();
b();//It is same as calling b from inside of function a

////////////////////////////////

function c(){
	//Function d is lexically sitting inside function c and thus it's outer reference is going to be myvar 2 inside c
	function d(){
		console.log(myvar2);//will return 2 
	}

	var myvar2 = 2;
	d();//No matter where the function is invoked, it's outer environment/reference is going to be based on where it is lexically sitting
}

var myvar2 = 1;
c();
//d(); //This is undefined because d's lexical environment is local to c not global

////////////////////////////////
function e(){
	function f(){
		console.log(myvar3);//will return 1 because of scope chain - outer refrence of f is e whose outer referece is than global
	}

	f();
}

var myvar3 = 1;
e();