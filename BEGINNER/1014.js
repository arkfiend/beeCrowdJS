var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var totalDist = parseFloat(lines.shift())
var spent = parseFloat(lines.shift())

console.log(`${(totalDist/spent).toFixed(3)} km/l`)
