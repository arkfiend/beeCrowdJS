var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var inputArray = lines.shift().split(' ')
var newArr = inputArray.map(x => x)
var arr = inputArray.sort(function (a,b){return a-b})

console.log(`${arr[0]}
${arr[1]}
${arr[2]}`)

console.log(`\n${newArr[0]}
${newArr[1]}
${newArr[2]}`)

