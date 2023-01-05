var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var A=parseFloat(lines.shift()*2.0)
var B=parseFloat(lines.shift()*3.0)
var C=parseFloat(lines.shift()*5.0)

var MEDIA=(A+B+C)/10

console.log("MEDIA = "+ MEDIA.toFixed(1))