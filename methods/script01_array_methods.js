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

// array.reverse()
a = ["a", "b", "c"];
var d = a.reverse();
console.log(d);

// array.shift()
Array.method("shift", function () {
	return this.splice(0, 1)[0];
});
c = a.shift();
console.log(c);

// array.unshift(item)
Array.method("unshift", function () {
	this.splice.apply(this, [0, 0].concat(Array.prototype.slice.apply(arguments)));
	return this.length;
});
a = ["a", "b", "c"];
var r = a.unshift("?", "@");
console.log("a is: " + a + " and, r is: " + r);

// array.slice(start, end)
a = ["a", "b", "c"];
b = a.slice(0, 1);
c = a.slice(1);
d = a.slice(1, 2);
console.log("a: " + a + "\nb: " + b + "\nc: " + c + "\nd: " + d);

// array.splice(start, deleteCount, item...)
Array.method("splice", function (start, deleteCount) {
	var max = Math.max,
		min = Math.min,
		delta,
		element,
		insertCount = max(arguments.length - 2, 0),
		k = 0,
		len = this.length,
		new_len,
		result = [],
		shift_count;

	start = start || 0;
	if (start < 0) {
		start += len;
	}

	start = max(min(start, len), 0);
	deleteCount = max(min(typeof deleteCount === "number" ? deleteCount : len, len - start), 0);
	delta = insertCount - deleteCount;
	new_len = len + delta;
	while (k < deleteCount) {
		element = this[start + k];
		if (element !== undefined) {
			result[k] = element;
		}
		k += 1;
	}
	shift_count = len - start - deleteCount;
	if (delta < 0) {
		k = start + insertCount;
		while (shift_count) {
			this[k] = this[k - delta];
			k += 1;
			shift_count -= 1;
		}
		this.length = new_len;
	} else if (delta > 0) {
		k = 1;
		while (shift_count) {
			this[new_len - k] = this[len - k];
			k += 1;
			shift_count -= 1;
		}
	}
	for (k = 0; k < insertCount; k += 1) {
		this[start + k] = arguments[k + 2];
	}
	return result;
});
a = ["a", "b", "c"];
r = a.splice(1, 1, "ache", "bug");
console.log(a);
console.log(r);

// Array.sort(comparefn)
var n = [4, 8, 15, 16, 23, 42];
n.sort()
console.log(n);

n.sort(function (a, b) {
	return a - b;
});
console.log(n);

var m = ["aa", "bb", "a", 4, 8, 15, 16, 23, 42];
m.sort(function (a, b) {
	if (a === b) {
		return 0;
	}

	if (typeof a === typeof b) {
		return a < b ? -1 : 1;
	}

	return typeof a < typeof b ? -1 : 1;
});
console.log(m);

// Function 'by' takes a member name string and returns
// a comparision function that can be used to sort an
// array of objects that contain that member.
var by = function (name, minor) {
	return function (o, p) {
		var a, b;

		if (typeof o === "object" && typeof p === "object" && o && p) {
			a = o[name];
			b = p[name];

			if (a === b) {
				return typeof minor === "function" ? minor(o, p) : 0;
			}

			if (typeof a === typeof b) {
				return a < b ? -1 : 1;
			}

			return typeof a < typeof b ? -1 : 1;
		} else {
			throw {
				name: "Error",
				message: "Expected an object when sorting by " + name
			};
		}
	};
};

var s = [
	{first: "Joe", last: "Besser"},
	{first: "Moe", last: "Howard"},
	{first: "Joe", last: "DeRita"},
	{first: "Shemp", last: "Howard"},
	{first: "Larry", last: "Fine"},
	{first: "Curly", last: "Howard"},
];

console.log(s.sort(by("last", by("first"))));

}) ();
