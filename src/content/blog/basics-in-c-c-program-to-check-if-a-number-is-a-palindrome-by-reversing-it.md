---
title: "Basics in C: C Program to Check if a Number is a Palindrome by Reversing It"
id: "basics-in-c-c-program-to-check-if-a-number-is-a-palindrome-by-reversing-it.md"
description: "In this blog post, we'll explore a simple yet effective C program that reverses a given number and checks whether it is a palindrome. A palindrome is a number that reads the same forward and backward, such as 121 or 12321. This program helps you determine if a number is a palindrome using basic concepts like loops, conditional statements, and arithmetic operations."
pubDate: "2024-08-21T13:26:34.490Z"
heroImage: "https://i.imgur.com/HCyGPVU.png"
categories: ['C']
keywords: ["Coders Heart", "Basics in C", "C program palindrome check", "number palindrome C code", "C programming basics", "reverse number in C", "palindrome algorithm C", "C language palindrome example", "C coding for beginners", "check palindrome C language", "C program examples", "number reversal in C"]
tags: ['C', 'Dev']
authors:
  - name: 'Anshuman Champatiray'
    avatar: 'https://i.imgur.com/Yb48lko.png'
    bio: 'Coder Heart: Passionate Insights and Practical Guides for Developers'
---

### 📝 **Description:**

In this blog post, we'll explore a simple yet effective C program that reverses a given number and checks whether it is a palindrome. A palindrome is a number that reads the same forward and backward, such as 121 or 12321. This program helps you determine if a number is a palindrome using basic concepts like loops, conditional statements, and arithmetic operations.

---

### 🚀 **Code Implementation:**

```c
#include<stdio.h>

int main(){
    int n,s,m;
    s=0;
    printf("Enter a number : ");
    scanf("%d", &n);
    m=n;
    while (n>0){
        s=s*10+n%10;
        n=n/10;
    }
    printf("Reverse of the number is %d\n", s);
    (s==m)?printf("It is a palindrome number...\n"):printf("Not a palindrome number...\n");
    return 0;
}
```

---

### 🔍 **Explanation:**

1. **Input:** The program prompts the user to enter a number.
2. **Reversal Process:** The entered number is reversed using a `while` loop.
3. **Palindrome Check:** After reversing, the program compares the reversed number with the original number.
4. **Output:** It prints whether the number is a palindrome or not.

---

### 📊 **Examples:**

#### Example 1:

- **Input:** `121`
- **Process:** 
  - Reversed Number: `121`
  - Since the reversed number is equal to the original number, `121` is a palindrome.
- **Output:** 
  ```plaintext
  Enter a number: 121
  Reverse of the number is 121
  It is a palindrome number...
  ```

#### Example 2:

- **Input:** `1234`
- **Process:** 
  - Reversed Number: `4321`
  - Since the reversed number is not equal to the original number, `1234` is not a palindrome.
- **Output:** 
  ```plaintext
  Enter a number: 1234
  Reverse of the number is 4321
  Not a palindrome number...
  ```

---

### 🎯 **Conclusion:**

This simple program helps in determining if a number is a palindrome by reversing it. Palindrome numbers have interesting properties and are often used in various programming challenges. Try this code with different inputs and see the results! Happy coding! 😊