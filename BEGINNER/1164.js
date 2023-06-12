var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function sumOfAllDivisors(number, it) {
 //endCase
 if (number === it){return 0}
 //baseCase
 return number%it===0 
  ? it+(sumOfAllDivisors(number, it+1)) 
  : 0 +(sumOfAllDivisors(number, it+1))
}

var numberOfCases = parseInt(lines.shift())
for (var ind=0;ind<numberOfCases;ind++){
 var actual=parseInt(lines.shift())
 actual === sumOfAllDivisors(actual, 1) ?console.log(`${actual} eh perfeito`) : console.log(`${actual} nao eh perfeito`)
}
