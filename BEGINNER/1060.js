var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

positives = 0;
lines.forEach(number => parseFloat(number) >= 0 ? positives++ : null )

console.log(`${positives} valores positivos`)