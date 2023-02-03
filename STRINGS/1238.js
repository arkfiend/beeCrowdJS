var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const numebrOfCases = parseInt(lines.shift())

for (var _case=0; _case < numebrOfCases; _case++){
  var stringArr = lines.shift().split(` `)
  
  var output = ''
  var ind=0
  while (true){
    //Check if string HAS this position:
    if (stringArr[0][ind]){
      output+=stringArr[0][ind]
    }else{ break }

    if (stringArr[1][ind]){
      output+=stringArr[1][ind]
    }else { break }

    ind++;
  }

  //Input the rest of array
  if (stringArr[0].length > stringArr[1].length+1){
    output += stringArr[0].slice(ind+1);
  }else if (stringArr[1].length > stringArr[0].length){
    output += stringArr[1].slice(ind);
  }

  console.log(output)
}