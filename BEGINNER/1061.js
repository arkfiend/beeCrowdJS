var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var iniD = parseInt(lines.shift().split(` `)[1])
var [iniH, iniM, iniS] = lines.shift().split(` : `).map((elem) => parseInt(elem))
var endD = parseInt(lines.shift().split(` `)[1])
var [endH, endM, endS] = lines.shift().split(` : `).map((elem) => parseInt(elem))

var D = endD - iniD
var H = endH - iniH
var M = endM - iniM
var S = endS - iniS

if (S < 0){
  S+=60
  M--
}

if (M < 0){
  M+=60
  H--
}

if (H < 0){
  H+=24
  D--
}

console.log(`${D} dia(s)\n${H} hora(s)\n${M} minuto(s)\n${S} segundo(s)`)