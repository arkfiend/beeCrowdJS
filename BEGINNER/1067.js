var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var number = parseInt(lines.shift())

for(ind=0; ind<=number; ind++){
 if ( ind%2 !==0 ){ console.log(ind) }
}
