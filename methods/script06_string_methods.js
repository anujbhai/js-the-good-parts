Function.prototype.method = function (name, callback) {
	if (!this.prototype.name) {
		this.prototype[name] = callback;
	}
	return this;
};

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

