var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var n=3.14159;
var R= parseFloat(lines.shift());
console.log("A="+ (n*R*R).toFixed(4));