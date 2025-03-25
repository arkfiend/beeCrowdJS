# 🧠✨ Solving [Beecrowd](https://www.beecrowd.com.br/) Problems with JavaScript 🚀

![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=000)  
![Docker](https://img.shields.io/badge/Docker-24%2B-2496ED?logo=docker&logoColor=white)  
![Contributions Welcome](https://img.shields.io/badge/Contributions-Welcome-brightgreen)  

---

## 📌 About This Project

This repository provides clear and well-structured solutions for problems on the [Beecrowd](https://www.beecrowd.com.br/) platform, implemented using **JavaScript**.
All solutions are listed in **folder** and **numerical order**, making it easy to find specific problems.
> **Important:** Please **don’t copy and paste** the solutions! Use them as a reference, and focus on understanding the logic to improve your own JavaScript skills. 🚀

## 🚧 Prerequisites
- 🐳 **Docker 24 or later installed.**


## 🧪 How to Test & Run These Codes
Running and testing the solutions is super simple:
1️⃣ Open your terminal and run:
```bash
bash run.sh
```

2️⃣ Inside the container, just execute:
```bash
node folder/exercise.js
```

## 📖 Example 
Let's take **BEGINNER/1001.js** as an example:

### Original code (Before):
```javascript
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var A = parseInt(lines.shift());
var B = parseInt(lines.shift());
var X = A+B
console.log(`X = ${X}`)
```
### Modified for Local Testing (After):
```javascript
var input = `10
20`;
var lines = input.split('\n');

var A = parseInt(lines.shift());
var B = parseInt(lines.shift());
var X = A + B;
console.log(`X = ${X}`);
```
### Excepted Output
```ini
X = 30
```

## 🤝 Want to Contribute?
We **welcome contributions**!
- Feel free to create a **Pull Request** to add improvements or corrections.
- If you notice any changes in Beecrowd problems that render solutions outdated, your help in fixing them is appreciated!

## 🌐 My Beecrowd Profile
Want to check my profile?
Click here 👉 [My Beecrowd Profile](https://www.beecrowd.com.br/judge/en/profile/755621)