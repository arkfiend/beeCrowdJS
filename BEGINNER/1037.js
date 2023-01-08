var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var number = parseFloat(lines.shift())

if (number< 0.0 || number >100.0){ console.log(`Fora de intervalo`)}
else
if (number <= 25.0 ){ console.log(`Intervalo [0,25]`) }
else
if (number <= 50.0){ console.log(`Intervalo (25,50]`)}
else
if (number <= 75.0){ console.log(`Intervalo (50,75]`)}
else{
 console.log(`Intervalo (75,100]`)
}
