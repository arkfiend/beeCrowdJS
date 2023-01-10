var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var [A, B] = lines.shift().split(' ')

var reminderAB = parseInt(B % A)
var reminderBA = parseInt(A % B)
reminderAB === 0 || reminderBA === 0? console.log(`Sao Multiplos`) : console.log(`Nao sao Multiplos`)




