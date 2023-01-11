var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var [ini, end]= lines.shift().split(' ')
ini = parseInt(ini)
end = parseInt(end)

var duration = 0;
if ( ini === end) { duration=24 }
else if (ini > end){ duration=24-ini+end }
else { duration=end-ini }

console.log(`O JOGO DUROU ${duration} HORA(S)`)
