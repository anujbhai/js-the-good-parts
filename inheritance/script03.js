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

Object.method("superior", function (name) {
	var that = this,
		method = that[name];

	return function () {
		return method.apply(that, arguments);
	};
});

/**************
 * Functional *
 **************/
var mammal = function (spec) {
	var that = {};

	that.get_name = function () {
		return spec.name;
	};

	that.says = function () {
		return spec.saying || "";
	};

	return that;
};

var myMammal = mammal({name: "Herb"});

var cat = function (spec) {
	spec.saying = spec.saying || "meow";

	var that = mammal(spec);

	that.purr = function (n) {
		var s = "";
		for (var i = 0; i < n; i++) {
			if (s) {
				s += "-";
			}
			s += "r";
		}
		return s;
	};

	that.get_name = function () {
		return that.says() + " " + spec.name + " " + that.says();
	};

	return that;
};

var myCat = cat({name: "Baadshah"});
console.log(myCat);
console.log(myCat.name);
console.log(myCat.says());
console.log(myCat.purr(2));
console.log(myCat.get_name());

var coolcat = function (spec) {
	var that = cat(spec),
		super_get_name = that.superior("get_name");

	that.get_name = function (n) {
		return "like " + super_get_name() + " baby";
	};

	return that;
};

var myCoolCat = coolcat({name: "Bix"});
console.log(myCoolCat);
console.log(myCat.name);
console.log(myCat.says());
console.log(myCat.purr(2));
console.log(myCoolCat.get_name());

/*********
 * Parts *
 *********/
 var eventuality = function (that) {
 	var registry = {};

 	that.fire = function (e) {
 		var arr,
 			func,
 			handler,
 			type = typeof e === "string"
 				? e
 				: e.type;

 		if (registry.hasOwnProperty(type)) {
 			arr = registry[type];

 			for (var i = 0; i < array.length; i += 1) {
 				handler = arr[i];

 				func = handler.method;

 				if (typeof func === "string") {
 					func = this[func];
 				}

 				func.apply(this, handler.parameters || [e])
 			}
 		}

 		return this;
 	};

 	that.on = function (type, method, parameters) {
 		var handler = {
 			method: method,
 			parameters: parameters
 		};

 		if (registry.hasOwnProperty(type)) {
 			registry[type].push(handler);
 		} else {
 			registry[type] = [handler]
 		}

 		return this;
 	};

 	return that;
};
eventuality(that);

}) ();
