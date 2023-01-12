var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var grand = lines.shift()
var parent = lines.shift()
var child = lines.shift()

const groups = [
  [0,0,0,'aguia'],
  [0,0,1,'pomba'],
  [0,1,0,'homem'],
  [0,1,1,'vaca'],
  [1,0,0,'pulga'],
  [1,0,1,'lagarta'],
  [1,1,0,'sanguessuga'],
  [1,1,1,'minhoca']
]

grand==='vertebrado'? grand=0 : grand=1
parent==='ave' || parent==='inseto' ? parent=0 : parent=1

//Child
if ( grand===0){
  if ( parent===0 ){ child = child==='carnivoro'? 0 : 1 }
  else{ child = child==='onivoro'? 0 : 1 }
}else{
  child = child==='hematofago'? 0 : 1
}


console.log(groups.find(item => item[0]==grand && item[1]==parent && item[2]==child)[3])