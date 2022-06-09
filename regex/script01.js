(function () {
"use strict";

console.log("Everything's working fine!");

/* Matching URLs */
var parse_url = /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/;
var url = "http://www.ora.com:80/goodparts?q#fragment";
var result = parse_url.exec(url);
var names = ["url", "scheme", "slash", "host", "port", "path", "query", "hash"];
var blanks = "    ";

for (var i = 0; i < names.length; i++) {
	document.getElementById("url").innerHTML += "<li>" + (names[i]) + ": " + (blanks.substring(names[i].length), result[i]) + "</li>";
}

/* Matching numbers */
var parse_number = /^-?\d+(?:\.\d*)?(?:e[+\-]?\d+)?$/i
var test = function (num) {
	document.getElementById("numbers").innerHTML += "<p>" + (parse_number.test(num)) + "</p>";
}

test("1");
test("number");
test("98.6");
test("132.21.86.100");
test("123.45E-67");
test("123.45D-67");

/* Construction */
// regex expression that matches a JS string
// var my_regex = /"(?:\\.|[^\\\"])*"/g;
var my_regex = new RegExp("\"(?:\\.|[^\\\\\\\"])*\"", "g");

// Matcher
function make_a_matcher() {
	return /a/gi;
}

var x = make_a_matcher();
var y = make_a_matcher();

x.lastIndex = 10;

console.log(y.lastIndex);

}) ();
