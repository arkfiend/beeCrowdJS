var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');


var X = parseInt(lines.shift())
var Y = parseInt(lines.shift())

var list = X>Y? [Y,X] : [X,Y]

for (var number=list[0]+1; number<list[1]; number++){
  var rest = number%5
  if (rest=== 2 || rest===3){console.log(number)}
}

