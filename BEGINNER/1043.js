var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var [A,B,C] = lines.shift().split(' ')
var A = parseFloat(A)
var B = parseFloat(B)
var C = parseFloat(C)

var checkA = B+C > A
var checkB = A+C > B
var checkC = A+B > C

if (checkA && checkB && checkC) {
 PERIM= (A+B+C)
 console.log(`Perimetro = ${PERIM.toFixed(1)}`)
}else{
 var AREA = (A+B)*C/2.0
 console.log(`Area = ${AREA.toFixed(1)}`)   
}


