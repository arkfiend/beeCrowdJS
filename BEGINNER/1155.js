var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var sum = 0
var ages = 0
while (true){
 var age = parseInt(lines.shift())
 if (age < 1){break}
 sum += age
 ages +=1
}

console.log((sum/ages*1.0).toFixed(2))