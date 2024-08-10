---
title: "Swapping Variables Without Using a Third Variable in C"
description: "Swapping the values of two variables is a common task in programming. A typical approach involves using a third variable to temporarily hold one of the values."
pubDate: "2024-07-15T05:10:36.182Z"
heroImage: "https://i.imgur.com/VUjxfu1.png"
categories: ['C']
keywords: ["swap variables in C", "C programming tricks", "variable swapping without third variable", "C language examples", "swap algorithm in C", "programming challenges", "C coding techniques", "swap using arithmetic", "bitwise swapping in C", "efficient variable swapping"]
tags: ['C', 'Dev']
authors:
  - name: 'Anshuman Champatiray'
    avatar: 'https://i.imgur.com/Yb48lko.png'
    bio: 'Coder Heart: Passionate Insights and Practical Guides for Developers'
---

# Swapping Variables Without Using a Third Variable in C

Swapping the values of two variables is a common task in programming. A typical approach involves using a third variable to temporarily hold one of the values. However, it is also possible to swap the values without using an additional variable. In this post, we will explore how to achieve this in C.

## The Code

Below is the C program to swap two variables without using a third variable:

```c
#include<stdio.h>

int main(){
    int a,b;
    printf("Enter value for variable A : ");
    scanf("%d", &a);
    printf("\nEnter value for variable b : ");
    scanf("%d", &b);

    a = a + b;
    b = a - b;
    a = a - b;

    printf("After swapping...\n");
    printf("The value of variable A : %d\nThe value of variable B : %d", a, b);
    return 0;
}
```

## Explanation

1. **Reading Inputs**: The program starts by reading the values of two variables, `a` and `b`, from the user.

    ```c
    printf("Enter value for variable A : ");
    scanf("%d", &a);
    printf("\nEnter value for variable b : ");
    scanf("%d", &b);
    ```

2. **Swapping Logic**: The core logic of swapping without a third variable involves simple arithmetic operations.

    - First, we add the values of `a` and `b` and store the result in `a`.
      
      ```c
      a = a + b;
      ```
    
    - Next, we subtract the new value of `a` (which is `a + b`) by `b`, and store the result in `b`. This effectively assigns the original value of `a` to `b`.
      
      ```c
      b = a - b;
      ```

    - Finally, we subtract the new value of `b` (which is the original value of `a`) from `a`, and store the result in `a`. This assigns the original value of `b` to `a`.
      
      ```c
      a = a - b;
      ```

3. **Output the Results**: After the swap, we print the new values of `a` and `b`.

    ```c
    printf("After swapping...\n");
    printf("The value of variable A : %d\nThe value of variable B : %d", a, b);
    ```

## Example Output

Here's an example of how the program works with specific inputs:

```
Enter value for variable A : 5

Enter value for variable B : 10
After swapping...
The value of variable A : 10
The value of variable B : 5
```

## Conclusion

Swapping two variables without using a third variable is a neat trick that utilizes basic arithmetic operations. This approach is not only efficient but also demonstrates the power of simple mathematical operations in solving problems. Try running the above code with different inputs to see how it works in practice!
