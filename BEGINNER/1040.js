var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var [N1, N2, N3, N4] = lines.shift().split(' ')
var examScore=parseFloat( lines.shift() )
var AVR= parseFloat((N1*2.0+N2*3.0+N3*4.0+N4*1.0)/10.0 )

console.log(`Media: ${(AVR).toFixed(1)}`)
if (AVR >= 5.0 && AVR < 7.0){
  console.log(`Aluno em exame.\nNota do exame: ${examScore.toFixed(1)}`)
  var examAVR=(AVR+examScore)/2.0
  if (examAVR >= 5.0) {
    console.log(`Aluno aprovado.`) }
  else{
    console.log(`Aluno reprovado.`)
  }
  console.log(`Media final: ${(examAVR).toFixed(1)}`)
}
else if (AVR < 5.0){ console.log(`Aluno reprovado.`) }
else { console.log(`Aluno aprovado.`) }
