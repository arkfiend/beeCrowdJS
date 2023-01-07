var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var value=parseInt(lines.shift())

var remainder100=value%100
var notes100=(value-remainder100)/100

var remainder50=remainder100%50
var notes50=(remainder100-remainder50)/50

var remainder20=remainder50%20
var notes20=(remainder50-remainder20)/20

var remainder10=remainder20%10
var notes10=(remainder20-remainder10)/10

var remainder5=remainder10%5
var notes5=(remainder10-remainder5)/5

var remainder2=remainder5%2
var notes2=(remainder5-remainder2)/2

var notes1=remainder2

console.log(`${value}
${notes100} nota(s) de R$ 100,00
${notes50} nota(s) de R$ 50,00
${notes20} nota(s) de R$ 20,00
${notes10} nota(s) de R$ 10,00
${notes5} nota(s) de R$ 5,00
${notes2} nota(s) de R$ 2,00
${notes1} nota(s) de R$ 1,00`);