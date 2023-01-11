var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var salary = lines.shift().split(' ')
salary = parseFloat(salary)

var salaries= [ 
  [0,400.0,15],
  [400.01,800.0,12],
  [800.01,1200.00,10],
  [1200.01,2000.0,7],
]
var higher=4

acceptable = salaries.filter(item => salary<=item[1] && salary>=item[0] )[0]
newSalary = 0
rate=0
adjustment=0

if (!acceptable){
  adjustment=salary*higher/100
  newSalary=salary+adjustment
  rate=higher
}else{
  adjustment=salary*acceptable[2]/100
  newSalary=salary+adjustment
  rate=acceptable[2]
}

console.log(`Novo salario: ${newSalary.toFixed(2)}`)
console.log(`Reajuste ganho: ${adjustment.toFixed(2)}`)
console.log(`Em percentual: ${rate} %`)
