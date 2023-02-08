var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var testCases = parseInt(lines.shift())

for (var indI=0;indI<testCases;indI++){
 var values = lines.shift().split(` `).sort( (a, b) => a-b)
 var sum=0
 for (var ind=parseInt(values[0])+1; ind<values[1];ind++){
  if ( ind%2!=0 ){ sum+=parseInt(ind);}
 }
 console.log(`${sum}`)
}
