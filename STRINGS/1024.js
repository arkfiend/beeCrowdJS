var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

moveLettersNPositions = function (word, pos){
  var res = word
    .split(``)
    .map(function(elem){
      var v = elem.charCodeAt(0)
      return (v>= 65 && v <= 90) || (v>=97 && v<=122 ) ? v+3 : v
    });

  return String.fromCharCode( ...res )
}

moveAllCharsNPositions = function (word, pos){
  var res = word
    .split(``)
    .map((elem) => elem.charCodeAt(0)+pos)

  return String.fromCharCode( ...res )
}

reverseTheWord = (word) => word.split(``).reverse().join(``)

moveOneBehindFromHalf = function (word){
  var size = word.length
  var iniPos = size%2===0? size/2 : (size-1)/2
  var res = moveAllCharsNPositions(word.substring(iniPos), -1)
  return word.substring(0, iniPos)+ res
}

var numberOfCases = parseInt(lines.shift())
for (var ind=0; ind< numberOfCases; ind++){
  var word = lines.shift()
  
  //trhee positions to right:
  word = moveLettersNPositions(word, 3)

  //reversed
  word = reverseTheWord(word)

  //moveOneBehind from the half
  word = moveOneBehindFromHalf(word)

  console.log(word)
}