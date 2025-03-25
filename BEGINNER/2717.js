var input = `20
10 10`;
var lines = input.split('\n');


var minutesLeft = parseInt(lines.shift());
var [firstGift, secondGift] = lines.shift().split(` `).map(elem => parseInt(elem));

if (minutesLeft >= (firstGift + secondGift)){
    console.log(`Farei hoje!`);
}else{
    console.log(`Deixa para amanha!`);
}


