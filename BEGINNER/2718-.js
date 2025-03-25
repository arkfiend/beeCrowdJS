var input = `3
11
23
23`;
var lines = input.split('\n');

for (let index=1; index<lines.length; index++){
  const binaryAsArray = BigInt(lines[index]).toString(2).split('');

  let maxBurnedBulbs = 0;
  let currentBurnedBulbs = 0;
  let previousWasBurned = true;
  for (let binaryIndex=0; binaryIndex<binaryAsArray.length; binaryIndex++){
    let actualBulb = binaryAsArray[binaryIndex];
    //stop if its not burning
    if (actualBulb === '0'){
      previousWasBurned = false;
      //indicate the max
      if (currentBurnedBulbs > maxBurnedBulbs){maxBurnedBulbs = currentBurnedBulbs;}
      //reset the counter
      currentBurnedBulbs = 0;
      continue;
    }

    currentBurnedBulbs++;
  }
  //Get the last item, because can be made only by "1s" for the last item
  if (currentBurnedBulbs > maxBurnedBulbs){maxBurnedBulbs = currentBurnedBulbs;}
  console.log(maxBurnedBulbs)

}

