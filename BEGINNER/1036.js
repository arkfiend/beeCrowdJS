var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var [A, B, C] = lines.shift().split(' ')
var delta=Math.sqrt( Math.pow(B, 2) - (4*A*C) )

var X1=((B*-1)+delta)/(2*A)
var X2=( (B*-1)-delta)/(2*A)

isNaN(X1, X2) 
  ? console.log(`Impossivel calcular`) 
  : console.log(`R1 = ${X1.toFixed(5)}\nR2 = ${X2.toFixed(5)}`);