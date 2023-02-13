var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

while (true){
  var pass = lines.shift()
  if (pass !== '2002'){ console.log(`Senha Invalida`) }
  else { console.log(`Acesso Permitido`); break; } 
}