(function () {
"use strict";

console.log("Everything's working fine!");

// var body = document.getElementById("app");

/* Function literal */
var add = function(a, b) {
	return a + b;
};

/* Invocation Patterns */
// method invocation
var myValue = {
	value: 0,
	increment: function (inc) {
			this.value += typeof inc === "number" ? inc : 1;
	}
};

myValue.increment();
document.writeln(myValue.value);

myValue.increment(2);
document.writeln(myValue.value);

// function invocation
console.log(add(40, 30));


}) ();
