var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');


var X = parseInt(lines.shift())
var Y = parseInt(lines.shift())

var list = X>Y ? [Y,X] : [X,Y]

var sum = 0
for (var number=list[0]; number<=list[1]; number++){
  if (number%13 !== 0){
    sum+=number
  }
}
console.log(sum)


