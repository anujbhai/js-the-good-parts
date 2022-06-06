(function () {
"use strict";

console.log("Everything's working fine!");

/**************
 * Prototypal *
 **************/
// differencial prototypal inheritance
var myMammal = {
	name: "Herb the Mammal",
	get_name: function () {
		return this.name;
	},
	says: function () {
		return this.saying || "";
	},
};

var myCat = Object.create(myMammal);
myCat.name = "Henritta";
myCat.saying = "meow";
myCat.purr = function (n) {
	var s = "";
	for (var i = 0; i < n; i++) {
		if (s) {
			s += "-";
		}
		s += "r";
	}
	return s;
};
myCat.get_name = function () {
	return this.says() + " " + this.name + " " + this.says();
};

console.log(myCat);
console.log(myCat.purr(10));

}) ();
