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

Array.method("reduce", function (f, val) {
	for (var i = 0; i < this.length; i++) {
		val = f(this[i], val);
	}

	return val;
});

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

// length
// - explicitly set length
numbers.length = 3;
console.log("Numbers is: ", numbers);

// - adding new element to the end
numbers[numbers.length] = "shi";
console.log("Numbers is: ", numbers);

numbers.push("go");
console.log("Numbers is: ", numbers);

// delete
delete numbers[2];
console.log("Numbers is: ", numbers);

numbers.splice(2, 1);
console.log("Numbers is: ", numbers);

// enumeration
for (var i = 0; i < numbers.length; i++) {
	console.log("Number item: ", i + " " + numbers[i]);
}

// determine array
var is_array = function (val) {
	return val &&
		typeof val === "object" &&
		typeof val.length === "number" &&
		typeof val.splice === "function" &&
		!(val.propertyIsEnumerable("length")); 
};

// methods
var data = [4, 8, 15, 16, 23, 42];

var add = function (a, b) {
	return a + b;
};
var mult = function (a, b) {
	return a * b;
};

var sum = data.reduce(add, 0);
var product = data.reduce(mult, 1);
data.total = function () {
	return this.reduce(add, 0);
};

var total = data.total();

console.log("sum: ", sum);
console.log("product: ", product);
console.log("total: ", total);

// dimension
Array.dim = function (dimension, initial) {
	var a = [];

	for (var i = 0; i < dimension; i++) {
		a[i] = initial;
	}

	return a;
}
Array.matrix = function (m, n, initial) {
	var a, mat = [];

	for (var i = 0; i < m; i++) {
		a = [];

		for (var j = 0; j < n; j++) {
			a[j] = initial;
		}

		mat[i] = a;
	}

	return mat;
};
Array.identity = function (n) {
	var mat = Array.matrix(n, n, 0);

	for (var i = 0; i < n; i++) {
		mat[i][i] = 1;
	}

	return mat;	
};

var myArr = Array.dim(10, 0);
console.log(myArr);

var myMatrix = Array.identity(4);
console.log(myMatrix[3][3]);

var make_2d_array = function (n) {
	for (var i = 0; i < n; i++) {
		myArr[i] = [];
	}
}
console.log(make_2d_array(4));
 
}) ();
