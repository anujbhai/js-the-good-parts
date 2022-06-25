Function.prototype.method = function (name, callback) {
	if (!this.prototype.name) {
		this.prototype[name] = callback;
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

	return function () {
		return this.replace(/[<>&"]/g, function (c) {
				return character[c];
		});
	};
}());

// string.charAt(pos)
String.method("charAt", function (pos) {
	return this.slice(pos, pos + 1);
});

var name = "Curly";
var initial = name.charAt(0)

// initial = name.charCodeAt(0);

var s = initial.concat("a", "b");

console.log(s);

// string.indexOf(searchString, position)
var text = "Mississippi";
var p = text.indexOf("ss");
console.log("p", p);

p = text.indexOf("ss", 3);
console.log("p", p);

p = text.indexOf("ss", 6);
console.log("p", p);

// string.lastIndexOf(searchString, position)
var p1 = text.lastIndexOf("ss");
console.log("p1: ", p1);

p1 = text.lastIndexOf("ss", 3);
console.log("p1: ", p1);

p1 = text.lastIndexOf("ss", 6);
console.log("p1: ", p1);

// string.localCompare(that)
var m = ["AAA", "A", "aa", "a", "Aa", "aaa"];
m.sort(function (a, b) {
	return a.localeCompare(b);
});

// string.match(regexp)
text = "<html><body bgcolor=\"linen\"><p>" + "This is <b>bold<\/b>!<\/p><\/body><\/html>";
var tags = /[^<>]+|<(\/?)([A-Za-z]+)([^<>]*)>/g;
var a = text.match(tags);

for (var i = 0; i < a.length; i++) {
	document.writeln(("// [" + i + "] " + a[i]).entityify());
	document.writeln();
}

// string.replace(searchvalue, replaceValue)
var resultText1 = "mother_in_law".replace("_", "-");
console.log(resultText1);

var oldAreaCode = /\((\d{3})\)/g;
var newAreaCode = "(555)666-1212".replace(oldAreaCode, "$1-");
console.log(newAreaCode);
console.log("<&>".entityify());

// string.search(regExp)
text = "and in it he says \"any damn fool could";
var pos = text.search(/["']/);
console.log(pos);

// string.slice(start, end)
var slice1 = text.slice(18);
var slice2 = text.slice(0, 3);
var slice3 = text.slice(-5);
var slice4 = text.slice(19, 32);

console.log("slice1: ", slice1);
console.log("slice2: ", slice2);
console.log("slice3: ", slice3);
console.log("slice4: ", slice4);

// string.split(separator)
var digits = "0123456789";
a = digits.split("", 5);
console.log("a: ", a);

var ip = "192.168.1.0";
var b = ip.split(".");
console.log("b: ", b);

var c = "a|b|c".split('|');
console.log("c: ", c);

text = "last, first, middle";
var d = text.split(/\s*,\s*/);
console.log("d: ", d);

var e = text.split(/\s*(,)\s*/);
console.log("e: ", e);

var f = "a|b|c".split(/\|/);
console.log("f: ", f);

// 

