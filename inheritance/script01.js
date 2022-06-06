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

/*******************
 * Psuedoclassical *
 *******************/
Function.method("new", function () {
	// Create a new object that inherits from the constructor's prototype.
	var that = Object.create(this.prototype);

	// Invoke the constructor, binding –this- to the new object.
	var other = this.apply(that, arguments);

	// if return value isn't an object, substitute the new object
	return (typeof other === "object" && other) || that;
});

Function.method("inherits", function (Parent) {
	this.prototype = new Parent();
	return this;
});

// Define a constructor and augment its prototype
var Mammal = function (name) {
	this.name = name;
};
Mammal.prototype.get_name = function () {
	return this.name;
};
Mammal.prototype.says = function () {
	return this.saying || "";
};

// instance
var myMammal = new Mammal("Herb the Mammal");
var name = myMammal.get_name();

var Cat = function (name) {
	this.name = name;
	this.saying = "meow";	
};

// replace Cat.prototype with a new instance of Mammal
Cat.prototype = new Mammal();

// augment the new prototype with purr and get get_name methods
Cat.prototype.purr = function (n) {
	var s = "";
	for (var i = 0; i < n; i++) {
		if (s) {
			s += "-";
		}
		s += "r";
	}
	return s;
};
Cat.prototype.get_name = function () {
	return this.says() + " " + this.name + " " + this.says();
};

var myCat = new Cat("Baadshah");
var says = myCat.says();
var purr = myCat.purr(5);
var name = myCat.get_name();

console.log(myCat);
console.log(purr);

var Dog = function (name) {
	this.name = name;
	this.saying = "Woof";
}.inherits(Mammal)
	.method("wag_tail", function (n) {
		var s = "";
		for (var i = 0; i < n; i++) {
			if (s) {
				s += "-";
			}
			s += "wag";
		}
		return s;
	})
	.method("get_name", function () {
		return this.says() + " " + this.name + " " + this.says();
	});

var myDog = new Dog("Yojinbau");
var says = myDog.says();
var wagtail = myDog.wag_tail(5);
var name = myDog.get_name();

console.log(myDog);
console.log(wagtail);

}) ();
