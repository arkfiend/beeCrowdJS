var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var lastNumber = parseInt(lines.shift())

for (var ind=2;ind<=lastNumber; ind+=2){
 console.log(`${ind}^2 = ${Math.pow(ind,2).toFixed(0)}`)
}




