var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');


var r=parseFloat(lines.shift())
var pi= 3.14159


var vol=(Math.pow(r, 3) * 4/3.0 *pi)
console.log("VOLUME = "+vol.toFixed(3))