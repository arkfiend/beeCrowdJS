var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var A=parseInt(lines.shift())
var B=parseInt(lines.shift())
var C=parseInt(lines.shift())
var D=parseInt(lines.shift())

var res=(A*B-C*D)
console.log("DIFERENCA = "+res)