var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var totalOfLines = parseInt(lines.shift())

for (var starter=1;starter<=totalOfLines;starter++){
  console.log(`${starter} ${starter*starter} ${starter*starter*starter}`)
  console.log(`${starter} ${starter*starter+1} ${starter*starter*starter+1}`)
}



