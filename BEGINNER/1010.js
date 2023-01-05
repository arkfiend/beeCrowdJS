var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var f1=lines.shift().split(' ')
var f2=lines.shift().split(' ')

var produto1 = f1[1] * f1[2]
var produto2 = f2[1] * f2[2]
var total = produto1 + produto2

console.log("VALOR A PAGAR: R$ "+total.toFixed(2))
