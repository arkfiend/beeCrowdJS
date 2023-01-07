var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var ageInDays = parseInt(lines.shift())

var years=parseInt( ageInDays/365 )
var months=parseInt( (ageInDays-(years*365))/ 30 )
var days=parseInt( (ageInDays-(months*30)-(years*365))% 30 )

console.log(`${years} ano(s)
${months} mes(es)
${days} dia(s)`);