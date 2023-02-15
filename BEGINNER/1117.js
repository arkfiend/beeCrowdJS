var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');


var sum = 0.0
var quantity = 0
while (true){
 //end case
 if (quantity === 2){break}

 var number = parseFloat(lines.shift())
 //Out of range 
 if (number < 0.0 || number > 10.0){
  console.log(`nota invalida`)
 }else{
  quantity++
  sum+=number
 }
}

console.log(`media = ${(sum/2.0).toFixed(2)}`)
