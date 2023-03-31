var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var [X,Y] = lines.shift().split(` `).map(elem => parseInt(elem))

//main loop
var actual = 1
var line = ''
while (actual<=Y){
  //first line
  //start or end of a new line
  if (actual === 1){line+=`1`}
  else
    if ((actual-1)%X===0){ 
      line+=`\n${actual}` 
    }else { 
      line+=` ${actual}`
    }

  //increment
  actual++
}

console.log(line)