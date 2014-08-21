var foo = require("gozala/foo")
var bar = require("gozala/bar@2.4")

console.log(foo.hello("bar@" + bar.version));
