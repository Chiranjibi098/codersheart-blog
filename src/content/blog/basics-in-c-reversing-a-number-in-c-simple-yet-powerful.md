---
title: "📝 Basics In C: Reversing a Number in C, Simple Yet Powerful!"
id: "basics-in-c-reversing-a-number-in-c-simple-yet-powerful.md"
description: "In this blog post, we'll explore a straightforward C program that takes an integer as input and returns its reverse. This basic program demonstrates fundamental concepts such as loops and modulus operations, making it a great exercise for beginners learning C programming."
pubDate: "2024-08-21T12:43:51.156Z"
heroImage: "https://i.imgur.com/130GJl6.png"
categories: ['C']
keywords: ["Coders Heart", "C program to reverse a number", "reverse number in C", "C programming examples", "C code for beginners", "number reversal algorithm in C", "reverse digits in C", "C programming loops and conditions", "basic C programs", "C programming practice", "C program with examples"]
tags: ['C', 'Dev']
authors:
  - name: 'Anshuman Champatiray'
    avatar: 'https://i.imgur.com/Yb48lko.png'
    bio: 'Coder Heart: Passionate Insights and Practical Guides for Developers'
---

### 📜 Description:
In this blog post, we'll explore a straightforward C program that takes an integer as input and returns its reverse. This basic program demonstrates fundamental concepts such as loops and modulus operations, making it a great exercise for beginners learning C programming.


### 🛠️ Code Explanation:

The given C program reads an integer from the user, reverses its digits, and then displays the reversed number. The program uses a `while` loop to extract each digit from the number and constructs the reverse number by appending these digits in reverse order.

Here's the code:

```c
#include<stdio.h>

int main(){
    int n, s;
    s = 0;
    printf("Enter a number: ");
    scanf("%d", &n);
    while (n > 0){
        s = s * 10 + n % 10;
        n = n / 10;
    }
    printf("Reverse of the number is %d", s);
    return 0;
}
```

---

### 🎯 Examples and Outputs:

#### Example 1:
- **Input:** 1234
- **Process:** 
  - Start with `n = 1234` and `s = 0`.
  - First iteration: `s = 0 * 10 + 4 = 4`, `n = 123`.
  - Second iteration: `s = 4 * 10 + 3 = 43`, `n = 12`.
  - Third iteration: `s = 43 * 10 + 2 = 432`, `n = 1`.
  - Fourth iteration: `s = 432 * 10 + 1 = 4321`, `n = 0`.
- **Output:** Reverse of the number is **4321**.

#### Example 2:
- **Input:** 98765
- **Process:** 
  - Start with `n = 98765` and `s = 0`.
  - First iteration: `s = 0 * 10 + 5 = 5`, `n = 9876`.
  - Second iteration: `s = 5 * 10 + 6 = 56`, `n = 987`.
  - Third iteration: `s = 56 * 10 + 7 = 567`, `n = 98`.
  - Fourth iteration: `s = 567 * 10 + 8 = 5678`, `n = 9`.
  - Fifth iteration: `s = 5678 * 10 + 9 = 56789`, `n = 0`.
- **Output:** Reverse of the number is **56789**.

---

### 🌟 Conclusion:
This simple program is a great introduction to working with loops and mathematical operations in C. By reversing the digits of a number, you not only gain a better understanding of control structures but also practice manipulating integers at a basic level.

