Function.prototype.method = function (name, func) {
	if (!this.prototype.name) {
		this.prototype[name] = func;
	}
	return this;
};

String.method("entityify", function () {
	var character = {
		"<": "&lt;",
		">": "&gt;",
		"&": "&amp;",
		"\"": "&quot;",
	};

	// Returns the string.entityify method, which
	// return the result of calling the replace method.
	// Its replaceValue function returns the result of
	// looking a character up in an object. This use of
	// an object ususlly outperforms switch statements.

	return function () {
		return this.replace(/[<>&"]/g, function (c) {
				return character[c]
		});
	};
}());

// Break a simple html text into tags amd texts.

// For each tag or text, produce an array containing
// [0] The full matched tag or text
// [1] The tag name
// [2] The /, if there is any
// [3] The attributes, if any

var text = "<html><body bgcolor=linen><p>" + "This is <b>bold<\/b><\/p><\/body><\/html>"
var tags = /[^<>]+|<(\/?)([A-Za-z]+)([^<>]*)>/g
var a, i;

while ((a = tags.exec(text))) {
	for (i = 0; i < a.length; i++) {
		console.log(("// [" + i + "] " + a[i]).entityify());
	}

	console.log();
}

// RegExp.method("test", function (string) {
//	return this.exec(string) !== null;
// });

var b = /&.+;/.test("frank &amp; beans");
console.log("b: ", b);

