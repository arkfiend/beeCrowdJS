var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var testCases = parseInt(lines.shift())
calculate = (P,G) => P+parseInt((P*G/100).toString().split(`.`)[0])
for (var ind=0;ind<testCases;ind++){
 var [PA, PB, G1, G2] = lines.shift().split(` `)
 PA = parseInt(PA)
 PB = parseInt(PB)
 G1 = parseFloat(G1)
 G2 = parseFloat(G2)

 years = 0
 while (PA<=PB){
  years++
  if (years > 100){break}
  PA = calculate(PA, G1)
  PB = calculate(PB, G2)
 }
 if (years > 100){console.log(`Mais de 1 seculo.`)}
 else{console.log(`${years} anos.`)}
}