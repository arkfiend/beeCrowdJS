var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var evens = 0
for (var ind=0; ind < 5; ind++){
    var formatedValue = parseInt(lines[ind])
    if (formatedValue%2 === 0 ){
        evens++
    }
}
console.log(`${evens} valores pares`)


