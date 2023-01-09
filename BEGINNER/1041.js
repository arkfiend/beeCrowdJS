var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var [X, Y] = lines.shift().split(' ')

//Origin
if (parseFloat(X) === 0.0 && parseFloat(Y) === 0.0){ console.log(`Origem`) }
//Axis
else if (parseFloat(X) === 0.0){ console.log(`Eixo Y`) }
else if (parseFloat(Y) === 0.0){ console.log(`Eixo X`) }
//Q1 or Q4
else if (X > 0.0){
  if (Y > 0.0){ console.log(`Q1`) }
  else { console.log(`Q4`) }
}
//Q2 or Q3
else {
  //X < 0
  if (Y > 0.0) { console.log(`Q2`) }
  else {console.log(`Q3`)}
}
