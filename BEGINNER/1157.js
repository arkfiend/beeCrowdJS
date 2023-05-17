var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var number = parseInt(lines.shift())
for (var ind=1;ind<=number;ind++){
  if (number%ind===0){console.log(ind)}
}
