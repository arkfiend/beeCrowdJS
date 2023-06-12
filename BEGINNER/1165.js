var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var cases = parseInt(lines.shift())

for (var ind=0;ind<cases; ind++){
 var number = parseInt(lines.shift())
 var isPrime = true

 for (var ind2=2; ind2 < number; ind2++){
  if (number%ind2 === 0){ isPrime = false}
 }

 isPrime? console.log(`${number} eh primo`) : console.log(`${number} nao eh primo`)
}
