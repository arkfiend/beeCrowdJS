var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var keepShowing = true
while (keepShowing ){
 var sum = 0.0
 var quantity = 0
 while (true){
  //end case
  if (quantity === 2){break}

  var number = parseFloat(lines.shift())
  //Out of range 
  if (number < 0.0 || number > 10.0){
   console.log(`nota invalida`)
  }else{
   quantity++
   sum+=number
  }
 }
 console.log(`media = ${(sum/2.0).toFixed(2)}`)
 //waiting until receive an valid number 1 or 2
 var validNumber = false
 while (!validNumber){
   console.log(`novo calculo (1-sim 2-nao)`)
   var newCalculation = parseInt(lines.shift())
   if (newCalculation === 1){ validNumber=true }
   else if (newCalculation === 2){ keepShowing=false; validnumber=true; break;}
 }
}