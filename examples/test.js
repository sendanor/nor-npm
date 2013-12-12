/* npm test */
var util = require('util');
var npm = require('../src/npm.js');
npm.load({}).then(function(){
	console.log("Done");
}).fail(function(err) {
	util.error("Error: " + err);
}).done();
/* EOF */
