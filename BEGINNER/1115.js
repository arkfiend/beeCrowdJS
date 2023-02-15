var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

while (true){
 var [A, B] = lines.shift().split(` `)
 A = parseInt(A)
 B = parseInt(B)
 //end
 if (A===0 || B===0){break}

 //show something
 if (A > 0){
  if (B > 0){ console.log(`primeiro`) }
  else{ console.log(`quarto`) }
 }else{
  if (B < 0){ console.log(`terceiro`) }
  else { console.log(`segundo`) }
 }
}