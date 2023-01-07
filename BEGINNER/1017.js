var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var hours = parseFloat(lines.shift())
var averageSpeed = parseFloat(lines.shift())
var result = averageSpeed*hours/12.0

console.log(`${result.toFixed(3)}`)