var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var X = parseInt(lines.shift())
var line = ''
var p1 = null
var p2 = null
for (var ind=1;ind<=X;ind++){
 if (ind < 3){
   if (ind === 1){
     line+=`0`
     p2=0
   }else{
     line+=` 1`
     p1=1
   }
 }else{
   var actual = parseInt(p1)+parseInt(p2)
   line+=` ${actual}`
   p2 = parseInt(p1)
   p1 = actual
 } 
}
console.log(line)
