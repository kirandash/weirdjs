//this = window at global object level
var a = 'Hello world!';

function b () {

}

//Both variable a and function b gets attached to the global object window but only if they are not sitting lexically inside a function
//So a can be accessed as a or window.a