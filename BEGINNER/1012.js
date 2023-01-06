var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var [A, B, C] = lines.shift().split(' ')
var pi=3.14159


var triangleRectangle=A*C/2.0
var circle= pi*Math.pow(C, 2)
var trapezium= (parseFloat(A)+parseFloat(B))*C/2.0
var square=Math.pow(B, 2)
var rectangle=A*B

console.log(`TRIANGULO: ${triangleRectangle.toFixed(3)}
CIRCULO: ${circle.toFixed(3)}
TRAPEZIO: ${trapezium.toFixed(3)}
QUADRADO: ${square.toFixed(3)}
RETANGULO: ${rectangle.toFixed(3)}`)