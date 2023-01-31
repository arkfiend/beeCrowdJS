var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var N= parseInt(lines.shift())

for (var ind=1;ind<=10;ind++){
 console.log(`${ind} x ${N} = ${ind*N}`)
}