var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var month = parseInt(lines.shift())

var months = [
    [1, 'January'],    [2, 'February'],
    [3, 'March'],    [4, 'April'],
    [5, 'May'],    [6, 'June'],
    [7, 'July'],    [8, 'August'],
    [9, 'September'],    [10, 'October'],
    [11, 'November'],    [12, 'December']
]

console.log(months.find(e => e[0] === month)[1])

