var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var number = parseInt(lines.shift())
for (var starter=1;starter<=number;starter++){
  console.log(`${starter} ${Math.pow(starter, 2)} ${Math.pow(starter,3)}`)
}