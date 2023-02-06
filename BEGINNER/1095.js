var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var i = 1
for (var j=60;j>=0;j-=5){
 console.log(`I=${i} J=${j}`)
 i+=3
}