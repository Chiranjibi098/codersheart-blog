---
title: "Difference Between var, let, and const"
id: "understanding-variable-declaration-in-javascript-var-let-and-const.md"
description: "JavaScript provides three ways to declare variables: `var`, `let`, and `const`. Each has different scoping rules and characteristics, which are important to understand for effective coding. This guide explains the differences between these keywords with examples."
pubDate: "2024-07-15T04:26:51.595Z"
heroImage: "https://i.imgur.com/k5m4DZe.png"
categories: ['JavaScript']
keywords: ["Coders Heart","JavaScript var vs let vs const", "difference between var let const", "JavaScript variable declarations", "var let const usage", "JavaScript programming", "ES6 features", "JavaScript scope and hoisting", "variable scope JavaScript", "const vs let", "JavaScript tutorials"]
tags: ['Java Script', 'technology']
authors:
  - name: 'Dibya Ranjan Maity'
    avatar: 'https://i.imgur.com/WwTGNbI.png'
    bio: 'Coder Heart: Passionate Insights and Practical Guides for Developers'
---

In JavaScript, we can declare variables using three keywords:

### 1. var

When a variable is declared using `var`, it means it is globally scoped.

```javascript
var x = 1;
if (x === 1) {
  var x = 2;
  // Expected Output: 2
  console.log(x);
}
// Expected Output: 2
console.log(x);
```

### 2. let

If we declare a variable using `let`, it is a locally scoped variable.

```javascript
let a = 1;
if (a === 1) {
  let a = 2;
  // Expected Output: 2
  console.log(a);
}
// Expected Output: 1
console.log(a);
```

### 3. const

When a variable is declared as `const`, it means throughout the program the value of the variable will remain the same. It means the value will never be changed if a variable is declared as `const`.

```javascript
const num = 10;
num = 100;
console.log(num);
// Expected output: TypeError: Assignment to constant variable.
```
