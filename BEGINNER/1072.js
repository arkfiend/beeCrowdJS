var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var testCases = lines.shift()
var _in = 0
var _out = 0
for (var ind=0; ind<testCases; ind++){
 var number = parseInt(lines.shift())
 if (number >=10 && number <=20){ _in+=1 } else { _out +=1 }
}
console.log(`${_in} in
${_out} out`)