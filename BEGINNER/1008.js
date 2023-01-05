var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var number=parseInt(lines.shift())
var workedHours=parseInt(lines.shift())
var receivedPerHour=parseFloat(lines.shift())

var res=workedHours*receivedPerHour

console.log("NUMBER = "+number)
console.log("SALARY = U$ "+res.toFixed(2))