var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var i=parseFloat(0.0)
while (i<=2.0){
 var showI = i.toFixed(1).endsWith('.0') ? i.toFixed(1).split('.0')[0] : i.toFixed(1)
 
 console.log(`I=${showI} J=${parseFloat(showI)+1}`)
 console.log(`I=${showI} J=${parseFloat(showI)+2}`)
 console.log(`I=${showI} J=${parseFloat(showI)+3}`)
 i = i+0.2
}


