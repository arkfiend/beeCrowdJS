# Solving [Beecrowd](https://www.beecrowd.com.br/) problems with JS🚀

This project aims to provide guidance on how to solve problems on the [Beecrowd´s](https://www.beecrowd.com.br/) website utilizing JavaScript. 
The solutions are listed in numerical order to make it easier to find and understand specific problems. 
It is important to not simply copy and paste the provided code, but rather to use it as a reference and strive to understand and master JavaScript.

## How to test these codes 
Its pretty easy to test or running theses codes. All you gonna need is:
1. Install Node 14 or superior
2. Change "input" value to values provided by example in exercise
3. (Utilizing a prompt, call) ```node nameOfYourArchive.js```
and that´s it!

### Test example: code BEGINNER/1001.js
#### BEFORE
```
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var A = parseInt(lines.shift());
var B = parseInt(lines.shift());
var X = A+B
console.log(`X = ${X}`)
```

#### AFTER
~~var input = require('fs').readFileSync('/dev/stdin', 'utf8')~~
```
var input = `10
20`;
var lines = input.split('\n');

var A = parseInt(lines.shift());
var B = parseInt(lines.shift());
var X = A+B
console.log(`X = ${X}`)
```

#### OUTPUT
```
X = 30
```
## Do you want to make some contributions?
Please feel free to create a pull request with any improvements you have for the Beecrowd exercises. Sometimes the exercises change, which may render some answers invalid. If you find any such answers, your help in improving them would be greatly appreciated.

## Do you want to see me there?
Check here at my [Profile](https://www.beecrowd.com.br/judge/en/profile/755621)
