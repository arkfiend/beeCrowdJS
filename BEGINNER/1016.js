var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

console.log(`${parseInt(lines.shift()) * 2} minutos`);
