var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var number = parseInt(lines.shift())

for (var ind=1;ind<=10000;ind++){
 if (ind%number === 2){
  console.log(ind)
 }
}
