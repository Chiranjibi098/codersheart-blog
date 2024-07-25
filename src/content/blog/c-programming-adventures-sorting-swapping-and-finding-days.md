---
title: "C Programming Adventures: Sorting, Swapping, and Finding Days! 🌟💻"
description: "Dive into the fascinating world of C programming with these classic examples! Learn how to swap values, sort arrays using bubble and selection sort algorithms, and even find the day of the week for any given date. Let's explore these essential concepts with fun and practical code snippets! 🚀📅"
pubDate: "2024-07-25T07:26:03.168Z"
heroImage: "https://i.imgur.com/2O96ZDD.jpg"
categories: ['C']
tags: ['C', 'Dev']
authors:
  - name: 'Anshuman Champatiray'
    avatar: 'https://i.imgur.com/Yb48lko.png'
    bio: 'Coder Heart: Passionate Insights and Practical Guides for Developers'
---

## Introduction🌟💻
Dive into the fascinating world of C programming with these classic examples! Learn how to swap values, sort arrays using bubble and selection sort algorithms, and even find the day of the week for any given date. Let's explore these essential concepts with fun and practical code snippets! 🚀📅
## 1. Swapping Values 🌟🔄
Swapping two values is a fundamental concept in programming. In this example, we use a third variable to swap the values of two integers.
```c
// Swapping two values using third variable
#include <stdio.h>
int main()
{
    int a, b, t;
    printf("Enter the value of variable A : ");
    scanf("%d", &a);
    printf("Enter the value of variable B : ");
    scanf("%d", &b);

    t = a;
    a = b;
    b = t;

    printf("After swapping...\n");
    printf("The value of variable A : %d\n", a);
    printf("The value of variable B : %d", b);

    return 0;
}
```
## Output
```
Enter the value of variable A : 5
Enter the value of variable B : 10
After swapping...
The value of variable A : 10
The value of variable B : 5
```
In this example, the user entered `5` for variable A and `10` for variable B. After swapping, variable A holds the value `10`, and variable B holds the value `5`.
## 2. Bubble Sort 🧼🔢
Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order.
```c
// Bubble sort
#include <stdio.h>
int main()
{
    int i, j, n, t;
    printf("Enter the size of the array : ");
    scanf("%d", &n);
    int a[n];
    printf("Enter values into array : \n");
    for (i = 0; i < n; i++)
    {
        printf("a[%d] : ", i);
        scanf("%d", &a[i]);
    }
    printf("The array is given below : \n");
    for (i = 0; i < n; i++)
    {
        printf("%d ", a[i]);
    }

    for (i = 0; i < n - 1; i++)
    {
        for (j = 0; j < n - 1 - i; j++)
        {
            if (a[j] > a[j + 1])
            {
                t = a[j];
                a[j] = a[j + 1];
                a[j + 1] = t;
            }
        }
    }
    printf("\nAfter sorting the array is given below : \n");
    for (i = 0; i < n; i++)
    {
        printf("%d ", a[i]);
    }
    return 0;
}
```
## Output
Suppose we have the following input:
- **Size of the array (n):** 5
- **Elements of the array:** 5, 3, 8, 4, 2
Here's how the output would be:
1. **Input Section:**
   ```
   Enter the size of the array : 5
   Enter values into array : 
   a[0] : 5
   a[1] : 3
   a[2] : 8
   a[3] : 4
   a[4] : 2
   ```

2. **Initial Array:**
   ```
   The array is given below : 
   5 3 8 4 2 
   ```

3. **Sorted Array:**
   ```
   After sorting the array is given below : 
   2 3 4 5 8 
   ```
This program takes an array input from the user, prints the array, sorts it using the Bubble Sort algorithm, and then prints the sorted array.
## 3. Selection Sort 🔍📋
Selection Sort is another sorting algorithm that divides the input list into two parts: the sorted and the unsorted. It repeatedly selects the smallest element from the unsorted part and moves it to the sorted part.
```c
// Selection sort
#include <stdio.h>
int main()
{
    int i, j, n, t;
    printf("Enter the size of the array : ");
    scanf("%d", &n);
    int a[n];
    printf("Enter values into array : \n");
    for (i = 0; i < n; i++)
    {
        printf("a[%d] : ", i);
        scanf("%d", &a[i]);
    }
    printf("The array is given below : \n");
    for (i = 0; i < n; i++)
    {
        printf("%d ", a[i]);
    }

    for (i = 0; i < n - 1; i++)
    {
        for (j = i + 1; j < n; j++)
        {
            if (a[i] > a[j])
            {
                t = a[j];
                a[j] = a[i];
                a[i] = t;
            }
        }
    }
    printf("\nAfter sorting the array is given below : \n");
    for (i = 0; i < n; i++)
    {
        printf("%d ", a[i]);
    }
    return 0;
}
```
## Output
Here's an example of how the output might look when running the provided selection sort program in C:

```plaintext
Enter the size of the array : 5
Enter values into array : 
a[0] : 64
a[1] : 34
a[2] : 25
a[3] : 12
a[4] : 22
The array is given below : 
64 34 25 12 22 
After sorting the array is given below : 
12 22 25 34 64 
```
In this example, the user enters the size of the array as 5 and inputs the values 64, 34, 25, 12, and 22. The program then sorts the array using the selection sort algorithm and outputs the sorted array.
## 4. Finding the Day of the Week 📅🔍
Ever wondered what day of the week a particular date falls on? This program calculates the day based on the date input by the user.
```c
// finding out day from a given date
#include <stdio.h>
int leap(int);
int odd_days_in_century(int);
void say_day(int);
int main()
{
    int dd, mm, yy, odd_day, i, m, l;
    int odd[12]; // contains odd days of each month
    printf("Enter date : ");
    scanf("%d", &dd);
    printf("Enter month in number : ");
    scanf("%d", &mm);
    printf("Enter year : ");
    scanf("%d", &yy);
    odd[0] = 3;        // JAN
    odd[1] = leap(yy); // FEB
    odd[2] = 3;        // MAR
    odd[3] = 2;        // APR
    odd[4] = 3;        // MAY
    odd[5] = 2;        // JUN
    odd[6] = 3;        // JUL
    odd[7] = 3;        // AUG
    odd[8] = 2;        // SEP
    odd[9] = 3;        // OCT
    odd[10] = 2;       // NOV
    odd[11] = 3;       // DEC

    // ODD DAYS IN PREVIOUS YEARS
    // if we have to find out the day of 18th march 2018, then we have to calculate odd days in 2017
    m = yy - 1;                          // m= 2018-1=2017
    l = m - (m % 100);                   // l= 2017-(2017 % 100)=2017-17=>l=2000
    l = odd_days_in_century(l % 400);    // This function will take the value of (2000 % 400) i.e the remainder
    l = l + (m % 100) + ((m % 100) / 4); // l=0+ (2017 % 100) + ((2017 % 100)/4) => l=0+17+4 => l=21

    for (i = 0; i < mm - 1; i++)
        l = l + odd[i]; // this loop will add the odd days of months
    // In the given example we have taken march, so it will add odd days upto february, thus mathematically we have taken (mm-1) in the loop
    // l=21+3+0=24

    l = l + dd; // in this step the value of date will be added...
    // l=24+18=42
    say_day(l % 7); // this function will take the remainder of (42 % 7) and print the day

    return 0;
}

int leap(int n)
{
    if ((n % 400 == 0) || (n % 4 == 0 && n % 100 != 0))
        return 1;
    else
        return 0;
}

int odd_days_in_century(int n)
{
    if (n == 100)
        return 5;
    else if (n == 200)
        return 3;
    else if (n == 300)
        return 1;
    else
        return 0;

    // as in the above example the remainder is 0 , so it will return 0... Go to Line number 32
    // If the remainder is 100, it will return 5
    // If the remainder is 200, it will return 3
    // If the remainder is 300, it will return 1
    // If the remainder is 0, it will return 0
}

void say_day(int n)
{
    if (n == 0)
        printf("It is Sunday");
    else if (n == 1)
        printf("It is Monday");
    else if (n == 2)
        printf("It is Tuesday");
    else if (n == 3)
        printf("It is Wednesday");
    else if (n == 4)
        printf("It is Thursday");
    else if (n == 5)
        printf("It is Friday");
    else
        printf("It is Saturday");

    // in the above example remainder is 0 , thus it will print Sunday... Go to Line number 42
    // for remainder = 0, sun
    // for remainder = 1, mon
    // for remainder = 2, tue
    // for remainder = 3, wed
    // for remainder = 4, thu
    // for remainder = 5, fri
    // for remainder = 6, sat
}
```
## Output
Suppose we input the date as 18th March 2018:

```plaintext
Enter date : 18
Enter month in number : 3
Enter year : 2018
```

The program then calculates the day of the week for this date.

1. **Odd Days in Previous Years**:
    - `m = yy - 1 = 2018 - 1 = 2017`
    - `l = m - (m % 100) = 2017 - (2017 % 100) = 2017 - 17 = 2000`
    - `l = odd_days_in_century(l % 400) = odd_days_in_century(2000 % 400) = odd_days_in_century(0) = 0`
    - `l = l + (m % 100) + ((m % 100) / 4) = 0 + (2017 % 100) + ((2017 % 100) / 4) = 0 + 17 + 4 = 21`

2. **Odd Days in Current Year (up to the given month)**:
    - Adding the odd days for January and February: `l = 21 + 3 (Jan) + 0 (Feb for non-leap year) = 24`

3. **Odd Days in Current Month**:
    - Adding the date: `l = 24 + 18 = 42`

4. **Finding the Day**:
    - The day of the week is found using `l % 7`: `say_day(42 % 7) = say_day(0)`
    - The day corresponding to 0 is Sunday.

So, the output will be:

```plaintext
It is Sunday
```

This means that March 18, 2018, was a Sunday.
