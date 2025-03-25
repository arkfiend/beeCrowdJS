// I dont really know why this not work.... I will try to fix it later
var input = `4
abc-1234
a-1010
AIQ-2001`;
var lines = input.split('\n');

function checkPattern(plate){
  //From start to end: 3 letters, 1 hyphen, 4 digits
  let pattern = /^[A-Z]{3}-\d{4}$/;
  return pattern.test(plate);
}

let restrictionArray = ['Friday', 'Monday', 'Monday', 'Tuesday', 'Tuesday', 'Wednesday', 'Wednesday', 'Thursday', 'Thursday', 'Friday'];

//Starts in 1, because the first line is the number of plates
for (let plateIndice = 1; plateIndice < lines.length; plateIndice++){
  let plate = lines[plateIndice];
  
  //Check the pattern
  if (!checkPattern(plate)){
    // console.log('plate: ', plate)
    console.log('FAILURE');	
  }else{
    //show the restriction
    let lastDigit = plate[plate.length - 1];
    console.log(restrictionArray[lastDigit]);
  }
  

}