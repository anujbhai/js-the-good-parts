(function () {
"use strict";

console.log("Everything's working fine!");

/* Arguments */
var sum = function () {
	var sum = 0;

	for (var i = 0; i < arguments.length; i ++) {
		sum += arguments[i];
	}

	return sum;
};
console.log(sum(4, 8, 15, 16, 23, 42));

/* Exception */
// throw
var add = function (a, b) {
	if (typeof a !== "number" || typeof b !== "number") {
		throw {
			name: "TypeError",
			message: "add needs numbers"
		};
	}

	return a + b;
};
console.log(add(2, 4));

// try/catch
var try_it = function () {
	try {
		add(2, 4);
	} catch (err) {
		console.log(err.name + ": " + e.message);
	}
};
console.log(try_it());

/* Augmenting Types */
// JavaScript allows the basic types of the language to be augmented
// by augmenting "Function.prototype", we can make a method available to all functions
Function.prototype.method = function (name, func) {
	if (!this.prototype.name) {
		this.prototype[name] = func;
	}
	return this;
};

Number.method("integer", function () {
	return Math[this < 0 ? "ceil" : "floor"](this);
});
console.log((-10 / 3).integer());

String.method("trim", function () {
	return this.replace(/^\s+|\s+$/g, "");
});
console.log("\"" + "    neat    ".trim() + "\"");

}) ();
