// I dont really know why this not work.... I will try to fix it later
var input = `3
2 2
4
1 2 2 6`;
var lines = input.split('\n');

for (let i=0; i < lines.length; i++){
  if (i%2 !== 0){

    let values = lines[i].split(' ').map(elem => BigInt(elem));

    let rangelIndex = 0;
    let rangelValue = values[rangelIndex]

    let guguIndex = values.length - 1;
    let guguValue = values[guguIndex]

    while(true){
      //Stop?
      if (rangelIndex + 1  > guguIndex || guguIndex === rangelIndex + 1){
        break;
      }

      //move the index
      if (rangelValue < guguValue && rangelIndex < guguIndex){
        rangelIndex++;
        rangelValue += values[rangelIndex];
      }else{

        if (rangelIndex + 1 >= guguIndex){
          break;
        }
        
        if (rangelValue > guguValue){
          guguIndex--;
          guguValue += values[guguIndex];
        }else{
          rangelIndex++;
          rangelValue += values[rangelIndex];
        }
      }
      
    }

    let diff = rangelValue - guguValue;
    if (diff < 0n) diff = -diff;
    console.log(`${diff}`);
    
  }
}




