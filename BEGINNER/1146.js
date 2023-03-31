var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var X = parseInt(lines.shift())

while (X !== 0){
 var line = '' 
 for(var ind=1;ind<=X;ind++){
  if (ind === 1){
   line='1' 
  }else{
    line+=` ${ind}`
  }
 }
 console.log(line)

 X = parseInt(lines.shift())
}
