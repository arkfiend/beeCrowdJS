var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var testCases = parseInt(lines.shift())

for (var ind=0;ind < testCases; ind++){
 var [A, B, C] = lines.shift().split(` `)
 A = parseFloat(A)
 B = parseFloat(B)
 C = parseFloat(C)
 var average = parseFloat(  ((A*2)+(B*3)+(C*5))/10.0  )
 console.log(average.toFixed(1))
}

