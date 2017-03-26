//Comparison Operators
console.log(3 < 2 < 1); //Left to right associativity - 3 < 2 - false - false gets coherced to 0 and 0 is less than 1
console.log(1 < 2 < 3); //1 < 2 - true - true = 1 < 3

//Cohercion examples
console.log(Number(undefined));

console.log(Number(null));

console.log(Number(true));

console.log(Number(false));

console.log(false == 0); //true

console.log(null == 0); //false

console.log(null < 1); //true

//Strict comparison (Equality comparisons 99% of time)
console.log(3 === 3); //true

console.log("3" === "3"); //true

console.log("3" === 3); //false

console.log("3" !== 3); //true