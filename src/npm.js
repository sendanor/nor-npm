/* npm.js */

var Q = require("q");
var NPM = require("npm");

var npm = module.exports = {};

/* npm.load */
npm.load = Q.nbind(NPM.load, NPM);

/* npm.commands */
npm.commands = {};
Object.keys(NPM.commands).forEach(function(key) {
	npm.commands[key] = Q.nbind(NPM.commands[key], NPM);
});

/* npm.on */
npm.on = NPM.on.bind(NPM);

/* EOF */
