var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var numberOfLines = parseInt(lines.shift())
var starter = 1
const increase = 1
for (var line=0;line<numberOfLines;line++){
  console.log(`${starter} ${starter+increase} ${starter+increase*2} PUM`)
  starter +=4
}