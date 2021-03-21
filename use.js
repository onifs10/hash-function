const hashPassword = require('./hash')
//string to be
var input = "Errors in strategy cannot be correct through tactical manoeuvres";
//hash the input
var output = hashPassword(input)
//log to terminal
console.log(output)