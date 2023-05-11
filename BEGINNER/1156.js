var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function s(N,D){
  if (N===39){return parseFloat(N/D)}
  return parseFloat(N/D)+s(N+2,D*2)
}

console.log(s(1,1).toFixed(2))

