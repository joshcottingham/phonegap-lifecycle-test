var key = "pen";
var value = "black";

window.localStorage.setItem(key, value);

var key = "pen";
var value = window.localStorage.getItem(key);

alert(value);


var simpsons = { 
	"firstName": "Homer",
	"lastName": "Simpson",
     "address": 
{
	"streetAddress": "742 Evergreen Terrace",
	"city": "Springfield",
	"state": "?"
} }

console.log (simpsons.firstName + "is from" + simpsons.address.city);

var homerString = JSON.stringify(simpsons); 

window.localStorage.setItem(“address”, homerString);

var getSimpson = window.localStorage.getItem(“address”); 

var simpsonJSON = JSON.parse(getSimpson);