(function () {
"use strict";

console.log("Everything's working fine!");

var list1 = document.getElementById("loop_obj");
var list2 = document.getElementById("loop_arr");

/* Object Literals */
var stooge = {
	"first-name": "Jerome",
	"last-name": "Howard"
};

// nested objects
var flight = {
	airline: "Oceanic",
	number: 815,
	departure: {
		IATA: "SYD",
		time: "2004-09-22 14:55",
		city: "Sydney"
	},
	arrival: {
		IATA: "LAX",
		time: "2004-09-23 10:42",
		city: "Los Angeles"
	},
};

/* Update */
stooge["middle-name"] = "Lester";
stooge.nickname = "Curly";

/* Prototype */
if (typeof Object.create !== "function") {
	Object.create = function (o) {
		var F = function () {};
		F.prototype = o;
		return new F();
	};
}
var another_stooge = Object.create(stooge);

another_stooge["first-name"] = "Harry";
another_stooge["middle-name"] = "Moses";
another_stooge.nickname = "Moe";

stooge.profession = "Actor";

console.log("Stooge: ", stooge);
console.log("Another stooge: ", another_stooge);
console.log("Another stooge prefession: ", another_stooge.profession);

// Reflection
console.log("Flight reflection - number: ", flight.hasOwnProperty("number"));
console.log("Flight reflection - constructor: ", flight.hasOwnProperty("constructor"));

// Enumeration
for (var name in another_stooge) {
	if (typeof another_stooge[name] !== "function") {
		list1.innerHTML += "<li>" + name + ": " + another_stooge[name] + "</li>";
	}
}

var properties = [
	"first-name",
	"middle-name",
	"last-name",
	"nickname",
	"profession",
];
for (var i = 0; i < properties.length; i++) {
	list2.innerHTML += "<li>" + properties[i] + ": " + another_stooge[properties[i]] + "</li>";
}

// Delete
delete another_stooge.nickname;
console.log(another_stooge.nickname);

}) ();
