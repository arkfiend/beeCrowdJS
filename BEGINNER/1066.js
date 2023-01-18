var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var evens = 0
var odds = 0
var positives = 0
var negatives = 0

for (var ind=0; ind < 5; ind++){
 var formatedValue = parseInt(lines[ind])
 if (formatedValue%2 === 0 ){ evens++ }else{ odds++ }
 
 if (formatedValue > 0.0){ positives++ }
 else 
  if (formatedValue < 0.0){
   negatives++
  }
}
console.log(`${evens} valor(es) par(es)
${odds} valor(es) impar(es)
${positives} valor(es) positivo(s)
${negatives} valor(es) negativo(s)`)