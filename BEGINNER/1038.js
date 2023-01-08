var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var [productCode, quantity] = lines.shift().split(' ')

var products = [0.0, 4.0, 4.5, 5.0, 2.0, 1.5]
var totalPrice = products[productCode] * quantity*1.0

console.log(`Total: R$ ${(totalPrice).toFixed(2)}`)

