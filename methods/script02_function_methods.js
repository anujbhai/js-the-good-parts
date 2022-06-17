(function () {
"use strict";

console.log("Everything's working fine!");

// augmenting types
Function.prototype.method = function (name, func) {
	if (!this.prototype.name) {
		this.prototype[name] = func;
	}
	return this;
};

/* Function methods */

// function.apply(thisArg, argArray)
Function.method("bind", function (that) {
	// Return a function that will call this function as
	// though it is a method  of that object
	var method = this,
		slice = Array.prototype.slice,
		args = slice.apply(arguments, [1]);

	return function () {
		return method.apply(that, args.concat(slice.apply(arguments, [0])));
	}
});

var x = function () {
	return this.value;
}.bind({value: 666});

console.log(x());

}) ();
