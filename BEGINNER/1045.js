var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var sides = lines.shift().split(` `);
sides.sort((a,b) => b-a)

var A = parseFloat(sides[0])
var B = parseFloat(sides[1])
var C = parseFloat(sides[2])

if (A >= (B+C)){
 console.log(`NAO FORMA TRIANGULO`)
}else{
 var rectangle= (Math.pow(B,2)+Math.pow(C,2))==Math.pow(A,2)
 var obtusangle= Math.pow(A,2) > (Math.pow(B,2)+Math.pow(C,2))
 var actuangle= Math.pow(A,2) < (Math.pow(B,2)+Math.pow(C,2))
 var equilateral = A===B && B===C
 var isosceles = (A===B && A!==C) || (A===C && A!== B) || (B===C && A!==B)
 if ( rectangle ) { console.log(`TRIANGULO RETANGULO`)}
 if ( obtusangle ) { console.log(`TRIANGULO OBTUSANGULO`) }
 if ( actuangle ) { console.log(`TRIANGULO ACUTANGULO`) }
 if (equilateral){ console.log(`TRIANGULO EQUILATERO`) }
 if (isosceles){ console.log(`TRIANGULO ISOSCELES`) }
}