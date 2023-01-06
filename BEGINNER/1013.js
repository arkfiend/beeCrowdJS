var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var [A, B, C] = lines.shift().split(' ')

var AB = (parseFloat(A)+parseFloat(B)+Math.abs(A-B))/2
var ABC = (AB+parseFloat(C)+Math.abs(AB-parseFloat(C)))/2

console.log(`${ABC} eh o maior`)