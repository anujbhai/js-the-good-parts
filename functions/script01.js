(function () {
"use strict";

console.log("Everything's working fine!");

// var body = document.getElementById("app");

/* Function literal */
var add = function(a, b) {
	return a + b;
};

/* Invocation Patterns */
// 1. method invocation
var myValue = {
	value: 0,
	increment: function (inc) {
			this.value += typeof inc === "number" ? inc : 1;
	},
	getValue: function () {
		return this.value;
	}
};

myValue.increment();
document.writeln(myValue.value);

myValue.increment(2);
document.writeln(myValue.value);

// 2. function invocation
console.log(add(3, 4));

// workaround for binding this to outer function
myValue.double = function () {
	var that = this;
	var helper = function () {
		that.value = add(that.value, that.value);
	};

	helper();
};

myValue.double();
document.writeln(myValue.getValue());

// 3. Constructor invocation
var Quo = function (string) {
	this.status = string;
};
Quo.prototype.get_status = function () {
	return this.status;
};

var myQuo = new Quo("confused");
document.writeln(myQuo.get_status());

// 4. Apply invocation
var applyPattern = [3, 4];
var sum = add.apply(null, applyPattern);

var statusObject = {
	status: "A-OK"
};

var status = Quo.prototype.get_status.apply(statusObject);
document.writeln(myQuo.get_status());

}) ();
