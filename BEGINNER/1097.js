var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

for (i=1;i<=9;i+=2){
 console.log(`I=${i} J=${i+6}`)
 console.log(`I=${i} J=${i+5}`)
 console.log(`I=${i} J=${i+4}`)
}