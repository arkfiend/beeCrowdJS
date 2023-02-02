var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var numberOfLines = parseInt(lines.shift())

var C = 0
var R = 0
var S = 0
var specimens = 0

for (var ind=0; ind< numberOfLines; ind++){
 var [quantity, animal] = lines.shift().split(` `)
 quantity = parseInt(quantity)
 if (animal === 'C'){ C+=quantity }
 else if (animal === 'R'){ R+=quantity}
 else {S += quantity}
 specimens += quantity
}

console.log(`Total: ${specimens} cobaias
Total de coelhos: ${C}
Total de ratos: ${R}
Total de sapos: ${S}
Percentual de coelhos: ${(C*100/(specimens*1.0)).toFixed(2)} %
Percentual de ratos: ${(R*100/(specimens*1.0)).toFixed(2)} %
Percentual de sapos: ${(S*100/(specimens*1.0)).toFixed(2)} %`)