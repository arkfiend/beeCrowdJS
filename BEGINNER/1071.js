var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var ini = parseInt(lines.shift())
var end = parseInt(lines.shift())

if (ini > end){
 var tmp=end
 end=ini
 ini = tmp
}

var sum = 0
ini +=1
while (end > ini){
 if (ini%2 !== 0){
  sum += ini
 }
 ini++
}

console.log(sum)

