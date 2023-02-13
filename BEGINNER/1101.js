var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

while (true){
  var pair = lines.shift().split(` `).sort((A,B) => A-B)
  var stop = pair.filter((element) => element<=0 )
  if (stop.length > 0){break}

  var printable = ''
  var sum=0
  for (var ind=pair[0]; ind<=pair[1]; ind++){
    printable+=ind+' '
    sum+=parseInt(ind)
  }
  console.log(`${printable}Sum=${sum}`)

}
