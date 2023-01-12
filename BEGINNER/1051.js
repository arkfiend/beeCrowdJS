var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var salary=lines.shift()
salary = parseFloat( salary )

var newSalary = 0

//Les than 2000
taxes = 0.0

if (salary <= 2000){
  console.log('Isento')
}else{
  if (salary <= 3000){ taxes= ((salary-2000)*0.08) }
  else if (salary <= 4500){ taxes= ((salary-3000)*0.18) + (1000*0.08) }
  else { taxes= ((salary-4500)*0.28) + (1000*0.08) + (1500*0.18) }
  console.log(`R$ ${taxes.toFixed(2)}`)
}