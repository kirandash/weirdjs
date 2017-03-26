//Object and dot
var person = new Object(); //Not the preferred way of creating an object

person["firstname"] = "Kiran";
person["lastname"] = "Dash";

var midNameProperty = "midname";

person[midNameProperty] = "Kumar";

//Access properties using brackets
console.log(person["firstname"] + ' ' +  person[midNameProperty] + ' ' + person["lastname"]);

//Access properties using dot - Member Access operator
console.log(person.firstname + ' ' + person.midname + ' ' + person.lastname);

//Object inside object
person.address = new Object();

person.address.city = "Hyderabad";
person.address.state = "Telangana";
person.address.pin = "500016";

console.log(person.address.city); //Preferred to use dot instead of brackets with strings or dynamic variable
console.log(person.address["state"]);
console.log(person["address"].pin);