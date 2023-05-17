var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

while (true){
 var number = parseInt(lines.shift())
 if (number === 0){break}
 var sum=0
 for (var ind=number;ind<number+10;ind++){
  if (ind%2===0){ sum+=ind }
 }
 console.log(sum)
}