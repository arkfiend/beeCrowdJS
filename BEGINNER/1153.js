var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function fat(N){
 if (N === 1) {return 1}
 return N *fat(N-1)
}

var N = parseInt(lines.shift())
console.log(fat(N))