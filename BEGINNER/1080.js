var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var position = 1
var higher = parseInt(lines.shift())
var quantity = 100

for (ind=2;ind<=quantity;ind++){
 var actual = parseInt(lines.shift())
 if (actual > higher){
  position=ind
  higher=actual
 }
}

console.log(`${higher}
${position}`)