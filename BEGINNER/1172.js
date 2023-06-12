var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

for (var ind=0;ind<10;ind++){
 var number = parseInt(lines.shift())
 console.log(`X[${ind}] = ${number >0? number : 1}`)
}