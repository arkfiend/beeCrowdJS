var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var [x1, y1] = lines.shift().split(' ')
var [x2, y2] = lines.shift().split(' ')

var dist1 = Math.pow(parseFloat(x2) - parseFloat(x1), 2)
var dist2 = Math.pow(parseFloat(y2) - parseFloat(y1), 2)
var res = Math.sqrt(dist1 + dist2)

console.log(`${res.toFixed(4)}`)
