var input = `3858024656635.7812`;
var lines = input.split('\n');

var expecteds = [
  `1929012328317.8906`,
  `964506164158.9453`,
  `482253082079.4727`,
  `241126541039.7363`,
  `120563270519.8682`
];

var [integerPart, decimalPart] = lines.shift().split(`.`)
var valueToPrint = integerPart + (decimalPart ? `.` + decimalPart : '');

function divideNumber(number, divideBy, expected){
  let subTotal = (number/divideBy).toString().split(`.`);
  let integerPart = subTotal[0];
  let decimalPart = subTotal[1];

  //Treat decimal, when more than 4 digits are exposed
  if (decimalPart && decimalPart.length > 4){
    if (number == '241126541039.7363'){
      console.log('decimal antes da regra: ', decimalPart)
    }

    //o arredondamento não é no 5, parece ser no 0.30 ou algo assim...

    //increase or not
    //decimalPart[3] >= 5, ex: recebe 4727, /2 é: 2363,5, que tem que virar: 7363 ao inves de 7364 (resultado da divisao)
    //decimalPart[3] >= 5, para fazer: 23635 virar 2364

    //tenho que fazer 86815 virar: 8682
    if (decimalPart[3] >= 5 ){
      decimalPart = parseInt(decimalPart.slice(0,4)) + 1;
    }else{
      decimalPart = decimalPart.slice(0,4);
    }
  }
  return {
    received: number,
    expected: expected,
    numberDivided: number/divideBy,
    integerPart: integerPart,
    decimalPart: decimalPart,
    return: integerPart + (decimalPart ? `.` + decimalPart : ''),
    passedNumberDivided: number/divideBy === expected,
    passedParts: integerPart + (decimalPart ? `.` + decimalPart : '') == expected
  }
}

console.log(`N[0] = ${valueToPrint}`)
for (let i=0;i< expecteds.length; i++){
  ret = divideNumber(valueToPrint, 2, expecteds[i]);
  if (ret.passedNumberDivided){
    console.log('numberDivided = Passed')
    valueToPrint = ret.numberDivided;
  }
  if (ret.passedParts){
    console.log('parts = Passed')
    valueToPrint = ret.return;
  }

  //error
  if (!ret.passedNumberDivided && !ret.passedParts){
    console.log('Error: ', ret);
  }

}


console.log(
  241126541039.7363 / 2
)

/*

N[5] = 3858024656635.7812
N[6] = 1929012328317.8906
N[7] = 964506164158.9453
N[8] = 482253082079.4727
N[9] = 241126541039.7363
N[10] = 120563270519.8682

*/