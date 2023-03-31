var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var values = lines.shift().split(` `)
var starter = parseInt(values[0])

var arr = values
  .slice(1)
  .map(elem => parseInt(elem))

//Getting N
var N = arr.find(elem => elem > 0)

//Main loop
var sum=0
for (var ind=0; ind<N; ind++){
  sum+=starter+ind
}
console.log(sum)
