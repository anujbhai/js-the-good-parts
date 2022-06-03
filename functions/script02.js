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

/* Augmenting Types */
// Towers of hanoi
var hanoi = function (disc, src, aux, des) {
	if (disc > 0) {
		hanoi(disc - 1, src, des, aux);

		document.getElementById("app").innerHTML += "<li>Move disc " + disc + " from " + src + " to " + des +  "</li>";

		hanoi(disc - 1, aux, src, des);
	}
};
hanoi(3, "Source", "Auxilary", "Destination");

// walk the DOM
var walk_the_DOM = function walk(node, func) {
	func(node);
	node = node.firstChild;
	while (node) {
		walk(node, func);
		node = node.nextSibling;
	}
};

var getElementsByAttribute = function (att, value) {
	var results = [];
	
	walk_the_DOM(document.body, function (node) {
		var actual = node.nodeType === 1 && node.getAttribute(att);
		if (typeof actual === "string" && (actual === value || typeof value !== "string")) {
			results.push(node);
		}
	});

	return results;
};
console.log(getElementsByAttribute("data-spare", "just-coding"));

// factorial
// Tail recursion: returns the result of calling itself
var factorial = function factorial(i, a) {
	a = a || 1;
	if (i < 2) {
		return a;
	}
	return factorial(i - 1, a * i);
};
document.writeln("factorial: ", factorial(4));

/* Scope */
var foo = function () {
	var a = 3,
		b = 5;

	console.log("a :", a); // 3
	console.log("b :", b); // 5

	var bar = function () {
		var b = 7,
			c = 11;
		console.log("a :", a); // 3
		console.log("b :", b); // 7
		console.log("c :", c); // 11

		a += b + c;
		console.log("a :", a); // 21
		console.log("b :", b); // 7
		console.log("c :", c); // 11
	};
	console.log("a :", a); // 3
	console.log("b :", b); // 5
	// console.log("c :", c); // undefined

	// bar();

	console.log("a :", a); // 21
	console.log("b :", b); // 5
};
// console.log(foo());

/* Closure */
// initializing an object with a funtion literal
var myValue = function () {
	var value = 0;

	return {
		increment: function (inc) {
			value += typeof inc === "number" ? inc : 1;
		},
		getValue: function () {
			return value;
		}
	};
}();
console.log("my value: ", myValue.increment(5));
console.log("my value: ", myValue.getValue());

var quo = function (status) {
	return {
		get_status: function () {
			return status;
		}
	};
};
var myQuo = quo("amazed");
document.writeln(myQuo.get_status());

var fade = function (node) {
	var level = 1;
	var step = function () {
		var hex = level.toString(16);
		node.style.backgroundColor = "#FFF" + hex + hex;

		if (level < 15) {
			level += 1;
			setTimeout(step, 100);
		}
	};
	setTimeout(step, 100);
};
fade(document.getElementById("app"));

var add_handlers = function (nodes) {
	var i;
	for (i = 0; i < nodes.length; i += 1) {
		nodes[i].onclick = function (i) {
			return function (e) {
				console.log(e);
			};
		}(i);
	}
};
add_handlers(document.getElementById("app"));

}) ();
