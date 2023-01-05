var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var name=lines.shift()
var salary=parseFloat(lines.shift())
var sales=parseFloat(lines.shift())

console.log("TOTAL = R$ "+((sales*0.15)+salary).toFixed(2))
