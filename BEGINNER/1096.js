var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

for (i=1;i<=9;i+=2){
 for (j=7;j>=5;j--){
  console.log(`I=${i} J=${j}`)
 }
}