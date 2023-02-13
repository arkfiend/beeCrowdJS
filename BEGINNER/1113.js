var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

while (true){
  var [A, B] = lines.shift().split(` `)
  A = parseInt(A)
  B = parseInt(B)
  //end
  if (A === B){ break }
  //Show something
  if (A > B){console.log(`Decrescente`)}
  else{ console.log(`Crescente`) }
}