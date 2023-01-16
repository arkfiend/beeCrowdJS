var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var positives = 0;
var average = 0.0;
var positiveSum = 0.0;

lines.forEach(function (number){
var formatedNumber = parseFloat(number)
 if ( formatedNumber  >= 0){ 
  positives++
  positiveSum += formatedNumber
 }
})

average = positiveSum / (positives*1.0)

console.log(`${positives} valores positivos
${average.toFixed(1) }`)

