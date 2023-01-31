var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var inputs = parseInt(lines.shift())

for (var ind=0;ind<inputs; ind++){
 var number = parseInt(lines.shift())
 if (number === 0){ console.log(`NULL`) }
 else if (number>0){
  number%2===0? console.log(`EVEN POSITIVE`) : console.log(`ODD POSITIVE`)
 }else{
  number%2===0? console.log(`EVEN NEGATIVE`) : console.log(`ODD NEGATIVE`)
 }
}