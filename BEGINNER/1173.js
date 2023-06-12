var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var number = parseInt(lines.shift())
for (var ind=0;ind<10;ind++){
 console.log(`N[${ind}] = ${number}`)
 number*=2
}