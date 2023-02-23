var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var grenal=0
var inter=0
var gremio=0
var draw=0

while(true){
  var [I,G] = lines.shift().split(` `)
  I = parseInt(I)
  G = parseInt(G)
  
  //score
  if (I > G){inter++} 
  else if (G > I){gremio++}
  else {draw++}

  grenal++

  //Ask another score
  console.log(`Novo grenal (1-sim 2-nao)`)
  var nextOption = parseInt(lines.shift())
  if (nextOption === 2){ break }
}

console.log(`${grenal} grenais
Inter:${inter}
Gremio:${gremio}
Empates:${draw}
${gremio > inter ? 'Gremio' : 'Inter'} venceu mais`)


