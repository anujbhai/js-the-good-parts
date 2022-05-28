(function () {
"use strict";

console.log("Everything's working fine!");

/* Global Abatement */
var MYAPP = {};

MYAPP.stooge = {
	"first-name": "Jerome",
	"last-name": "Howard"
};

// nested objects
MYAPP.flight = {
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

// update
MYAPP.stooge.profession = "Actor";
console.log("Another stooge prefession: ", MYAPP.stooge.profession);

/* Prototype */
if (typeof Object.create !== "function") {
	Object.create = function (o) {
		var F = function () {};
		F.prototype = o;
		return new F();
	};
}
var another_stooge = Object.create(MYAPP.stooge);
another_stooge["first-name"] = "Harry";
another_stooge["middle-name"] = "Moses";
another_stooge.nickname = "Moe";

// Enumeration
var properties = [
	"first-name",
	"middle-name",
	"last-name",
	"nickname",
	"profession",
];
for (var i = 0; i < properties.length; i++) {
	console.log(properties[i] + ": " + another_stooge[properties[i]]);
}

}) ();
