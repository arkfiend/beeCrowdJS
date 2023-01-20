var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var number = parseInt(lines.shift())

var showed=0
while (showed < 6){
  if ( number%2 !== 0 ){
   console.log(number)
   showed++
  }
 number++
}


