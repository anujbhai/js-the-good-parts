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

/* Array methods */

// array.concat(item...)
var a = ['a', 'b', 'c'];
var b = ['x', 'y', 'z'];
var c = a.concat(b, true);
console.log(c);

// array.join(separator)
a.push("d");
c = a.join("-");
console.log(c);

// array.pop()
c = a.pop();
console.log(c);

Array.method("pop", function () {
	return this.splice(this.length - 1, 1)[0];
});
c = a.pop();
console.log(c);

// array.push(item...)
Array.method("push", function () {
 	return this.splice.apply(this, [this.length, 0].concat(Array.prototype.slice.apply(arguments)));
	// return this.length;
});
c = a.push(b, true);
console.log(c);


}) ();
