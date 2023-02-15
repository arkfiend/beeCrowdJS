var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var pairs = parseInt(lines.shift())

for (var ind=0; ind < pairs; ind++){
  var [A, B] = lines.shift().split(` `)
  A = parseInt(A)
  B = parseInt(B)
  //impossible
  if (B === 0){console.log(`divisao impossivel`)}
  else{
    var res = parseFloat( A/B ).toFixed(1)
    console.log(res)
  } 
}
