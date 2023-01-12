var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var ddd = parseInt(lines.shift())

var destinations = [
    [61, 'Brasilia'],
    [71, 'Salvador'],
    [11, 'Sao Paulo'],
    [21, 'Rio de Janeiro'],
    [32, 'Juiz de Fora'],
    [19, 'Campinas'],
    [27, 'Vitoria'],
    [31, 'Belo Horizonte']
]

var chosen = destinations.find(e => e[0] === ddd)
chosen ? console.log(chosen[1]) : console.log('DDD nao cadastrado')