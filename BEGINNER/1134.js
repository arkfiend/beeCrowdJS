var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var Alcohol=0
var Gasoline=0
var Diesel=0

var fuel=parseInt(lines.shift())

while(fuel !== 4){
  if (fuel === 1){ Alcohol++ }
  else if (fuel === 2){ Gasoline++ }
  else if (fuel === 3){ Diesel++ }

  fuel=parseInt(lines.shift())
}

console.log(`MUITO OBRIGADO
Alcool: ${Alcohol}
Gasolina: ${Gasoline}
Diesel: ${Diesel}`)

