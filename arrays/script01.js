(function () {
"use strict";

console.log("Everything's working fine!");

/******************
 * Array Literals *
 ******************/
var empty = [];
var numbers = [
	"zero", "one", "two", "three", "four", "five",
	"six", "seven", "eight", "nine", "ten"
];

// object literal
var number_object = {
	0: "zero", 1: "one", 2: "two",
	3: "three", 4: "four", 5: "five",
	6: "six", 7: "seven", 8: "eight",
	9: "nine", 10: "ten"
};

var misc = [
	"string", 98.6, true, false, null, undefined,
	["nested", "array"], 	{object: true}, NaN,
	Infinity
];
console.log(misc.length);

}) ();
