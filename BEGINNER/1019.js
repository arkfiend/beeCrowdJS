var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var total=parseInt(lines.shift())

var hours=parseInt(total/3600)
var minutes=parseInt( (total-(hours*3600))/60 )
var seconds=parseInt(total-(hours*3600)-(minutes*60))


console.log(`${hours}:${minutes}:${seconds}`)