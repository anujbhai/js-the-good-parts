(function () {
"use strict";

console.log("Everything's working fine!");

/* Object Literals */
var empty_object = {};

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
stooge["first-name"] = "JEROME";
stooge["middle-name"] = "Lester";
stooge.nickname = "Curly";
flight.equipment = {
	model: "Boeing 777"
};
flight.status = "overdue";

/* Retrieval */
console.log(stooge["first-name"]);
console.log(flight.departure.IATA);

console.log(stooge["middle-name"]);
console.log(flight.status);

var middle = stooge["middle-name"] || "(none)";
var status = flight.status || "unknown";

console.log(middle);
console.log(status);

console.log(flight.equipment);
// console.log(flight.equipment.model);
console.log(flight.equipment && flight.equipment.model);

/* Reference */
var x = stooge;
x.nickname = "CURLY";

var nick = stooge.nickname;
console.log(nick);



}) ();
