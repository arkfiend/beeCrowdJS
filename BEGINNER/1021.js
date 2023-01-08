var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var valueFloat = parseFloat(lines.shift());
var valueTrunc = Math.trunc(valueFloat);
var valueCTrunc = (((Math.trunc(valueFloat)) - valueFloat) * -1) * 100;

var notes100 = valueTrunc / 100;
var r100 = valueTrunc % 100;
var notes50 = r100 / 50;
var r50 = r100 % 50;
var notes20 = r50 / 20;
var r20 = r50 % 20;
var notes10 = r20 / 10;
var r10 = r20 % 10;
var notes5 = r10 / 5;
var r5 = r10 % 5;

var notes2 = r5 / 2;
var r2 = r5 % 2;
var coins1 = r2 / 1;
var coins5 = valueCTrunc / (0.5 * 100);
var r05 = valueCTrunc  % (0.5 * 100) ;
var coins25 = r05   / (0.25 * 100) ;
var r25 = r05   % (0.25 * 100) ;
var coins10 =  r25 / (0.10 * 100) ;
var r010 = r25 % (0.10 * 100);
var coins05 = r010 / (0.05 * 100) ;
var r05 = r010  % (0.05 * 100) ;
var coins01 = r05  / (0.01 * 100);

console.log("notes:");
console.log(Math.trunc(notes100) + " nota(s) de R$ 100.00");
console.log(Math.trunc(notes50) + " nota(s) de R$ 50.00");
console.log(Math.trunc(notes20) + " nota(s) de R$ 20.00");
console.log(Math.trunc(notes10) + " nota(s) de R$ 10.00");
console.log(Math.trunc(notes5) + " nota(s) de R$ 5.00");
console.log(Math.trunc(notes2) + " nota(s) de R$ 2.00");
console.log("coins:");
console.log(Math.trunc(coins1) + ' moeda(s) de R$ 1.00');
console.log(Math.trunc(coins5) + " moeda(s) de R$ 0.50");
console.log(Math.trunc(coins25)+ " moeda(s) de R$ 0.25");
console.log(Math.trunc(coins10) + " moeda(s) de R$ 0.10");
console.log(Math.trunc(coins05) + " moeda(s) de R$ 0.05");
console.log(Math.trunc(coins01) + " moeda(s) de R$ 0.01");
