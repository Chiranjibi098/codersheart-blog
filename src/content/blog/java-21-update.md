---
title: "Java 21 Update: What's New and Exciting?"
id: "java-21-update.md"
description: 'Java 21 has arrived, and it brings a plethora of new features, enhancements, and performance improvements.'
pubDate: "2024-07-03T06:20:12.585Z"
heroImage: 'https://i.imgur.com/GEff9SD.png'
categories: ['Java']
keywords: ["Coders Heart","Java 21 new features", "Java 21 update", "Java programming", "Java 21 enhancements", "Java 21 improvements", "latest Java release", "Java development", "Java 21 overview", "what's new in Java 21", "Java 21 features"]
tags: ['Java', 'Dev Updates']
authors:
  - name: 'Chiranjibi Sahu'
    avatar: 'https://i.imgur.com/m1V8jYF.png'
    bio: 'Coder Heart: Passionate Insights and Practical Guides for Developers'
---


## Introduction

Java 21 has arrived, and it brings a plethora of new features, enhancements, and performance improvements. This blog post will cover the most significant changes in Java 21, providing examples to help you understand and use these new features effectively. Additionally, we'll take a nostalgic look at the `public static void main(String[] args)` method and its significance in Java programming.

## New Features in Java 21

### 1. Record Patterns

Java 21 introduces record patterns, allowing for more concise and readable code when deconstructing record objects.

#### Example:

```java
record Point(int x, int y) {}

public class Main {
    public static void main(String[] args) {
        Point p = new Point(4, 5);

        if (p instanceof Point(int x, int y)) {
            System.out.println("x = " + x + ", y = " + y);
        }
    }
}

```

## 2. Pattern Matching for switch

The pattern matching for switch statements, introduced in previous versions, is now fully supported in Java 21, enabling more powerful and expressive switch expressions.

### Example:

```java
public class Main {
    public static void main(String[] args) {
        Object obj = 123;

        String result = switch (obj) {
            case Integer i -> "Integer: " + i;
            case String s -> "String: " + s;
            default -> "Unknown type";
        };

        System.out.println(result);
    }
}
```

## 3. Virtual Threads

Virtual threads, part of Project Loom, are lightweight threads that significantly improve the scalability of concurrent applications.

### Example:

```java
public class Main {
    public static void main(String[] args) throws InterruptedException {
        Thread.startVirtualThread(() -> {
            System.out.println("Hello from a virtual thread!");
        });

        Thread.sleep(100); // Wait to ensure the virtual thread completes
    }
}
```

## 4. Foreign Function & Memory API

This API is now finalized, allowing Java programs to interoperate with native code and manage off-heap memory more efficiently.

### Example:

```java
import jdk.incubator.foreign.*;

public class Main {
    public static void main(String[] args) {
        try (MemorySegment segment = MemorySegment.allocateNative(1024)) {
            MemoryAccess.setIntAtOffset(segment, 0, 42);
            int value = MemoryAccess.getIntAtOffset(segment, 0);
            System.out.println("Value: " + value);
        }
    }
}
```

## 5. Sealed Classes

Sealed classes and interfaces restrict which other classes or interfaces may extend or implement them, enhancing control over the inheritance hierarchy.

### Example:

```java
public sealed class Shape permits Circle, Rectangle {}

final class Circle extends Shape {}
final class Rectangle extends Shape {}

```
## The Story of `public static void main(String[] args)`

The `public static void main(String[] args)` method is the entry point of any Java application. It serves a special purpose and holds a unique place in Java's history. Let's break down its components:

1. public: The method is accessible from anywhere.
2. static: It can be called without creating an instance of the class.
3. void: It doesn't return any value.
4. main: The name of the method that the JVM looks for as the starting point.
5. String[] args: An array of String arguments passed from the command line.

### Example:

```java
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
```
This method has remained consistent since the inception of Java, ensuring that all Java programs have a uniform entry point. The simplicity and predictability of public static void main have contributed to Java's popularity and widespread adoption.

### Conclusion

Java 21 brings exciting new features that enhance the language's capabilities and make it even more powerful and expressive. From record patterns to virtual threads and the finalization of the Foreign Function & Memory API, Java developers have a lot to explore and utilize. And through it all, the public static void main(String[] args) method continues to be the steadfast starting point of Java applications, a testament to its enduring design.