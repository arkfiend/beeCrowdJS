var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var cases = parseInt(lines.shift())

for (var ind=0;ind<cases;ind++){
  var [X,Y] = lines.shift().split(` `).map(elem => parseInt(elem))
  var quantity=0
  var actual=X
  var sum = 0
  while (quantity<Y){
    if (actual%2!==0){ sum+=actual; quantity++ }
    actual++
  }
 console.log(sum)
}