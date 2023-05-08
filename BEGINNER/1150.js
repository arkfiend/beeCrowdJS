var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var X = parseInt(lines.shift())

//finding Z
var Z = 0
while ( true ){ 
  Z = parseInt(lines.shift()) 
  if (Z > X){break}
}

//Main loop
var numbers=0;
var sum = 0
var actual = X
while (true){
  //end case
  if (sum > Z){break}

  //base case
  numbers++
  sum += actual
  actual++
}

console.log(`${numbers}`)


