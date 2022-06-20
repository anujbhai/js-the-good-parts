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

