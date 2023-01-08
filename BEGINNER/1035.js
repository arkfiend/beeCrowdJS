var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var [A, B, C, D] = lines.shift().split(' ')

var BgreaterThanC= B > C
var DgreaterThanA= D > A
var sumCDgreaterThansumAB= (C+D) > (A+B)
var CDpositives= (C>0) && (D>0) 
var AisEven = A%2 === 0

BgreaterThanC && DgreaterThanA 
&& sumCDgreaterThansumAB && CDpositives && AisEven
  ? console.log(`Valores aceitos`)
  : console.log(`Valores nao aceitos`)
