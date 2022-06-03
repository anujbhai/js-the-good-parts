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

// memoizer
var memoizer = function (memo, fundamental) {
	var shell = function (n) {
		var result = memo[n];

		if (typeof result !== "number") {
			result = fundamental(shell, n);
			memo[n] = result;
		}

		return result;
	};

	return shell;	
};

/* Module */
String.method("deentityify", function() {
	var entity = {
		quot: "\"",
		lt: "<",
		gt: ">"
	};

	return function () {
		return this.replace(/&([^&;]+);/g, function (a, b) {
			var r = entity[b];
			return typeof r === "string" ? r : a;
		});
	};
}());
document.writeln("&lt;&quot;&gt;".deentityify());

// serial maker
var serial_maker = function () {
	var prefix = "";
	var seq = 0;

	return {
		set_prefix: function (p) {
			prefix = String(p);
		},
		set_seq: function (s) {
			seq = s;
		},
		gensym: function () {
			var result = prefix + seq;
			seq += 1;
			return result;
		}
	};
};

var seqer = serial_maker();
seqer.set_prefix = ("Q");
seqer.set_seq = (1000);
var unique = seqer.gensym();
console.log("unique: ", unique);

/* Currying */
Function.method("curry", function () {
	var slice = Array.prototype.slice,
		args = slice.apply(arguments),
		that = this;

	return function () {
		return that.apply(null, args.concat(slice.apply(arguments)));
	};
});

var add1 = add.curry(1);
document.writeln(add1(6)); // 7

/* Memoization */
// Fabionacci
var fibonacci = memoizer([0, 1], function (shell, n) {
	return shell(n - 1) + shell(n - 2)
});
for (var i = 0; i <= 10; i++) {
	document.getElementById("app").innerHTML += "<li>// " + i + ": " + fibonacci(i) + "</li>";
}

// factorial
// Tail recursion: returns the result of calling itself
var factorial = memoizer([1, 1], function (shell, n) {
	return n * shell(n - 1);
});
document.querySelector("body").innerHTML += "<p>factorial: " + factorial(4) + "</p>";

}) ();
