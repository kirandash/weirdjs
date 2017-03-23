console.log(a);
b();

//b and a is stored in memory space but a is not assigned the 'Hello World' value, while in case of function the entire function is stored in memory

//EXECUTION CONTEXT is created in 2 phases - 1. CREATION PHASE - Creation of global object, this and the outer environment, Setup Memory spces for variables and functions "HOISTING" - Functions are stored entirely but variables are stored without assignment and assigned as undefined

//Phase 2 - EXECUTION PHASE - code looks at the memory space and then starts running top to bottom.

var a = 'Hello world!';

function b () {
	console.log('function b is called');
}

//So better to use the variable and function after they are defined
/*console.log(a);
b();*/