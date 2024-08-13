---
title: "🚀 Elevating Java Development: Mastering Multiple REST Calls with CompletableFuture"
id: "elevating-java-development-mastering-multiple-rest-calls-with-completablefuture.md"
description: "In the realm of modern Java development, efficient handling of concurrent tasks is paramount. Java's CompletableFuture offers a robust solution for asynchronous programming, enabling developers to execute multiple REST calls concurrently and manage their results seamlessly."
pubDate: "2024-07-16T07:15:00.746Z"
heroImage: "https://i.imgur.com/ArYG7lt.png"
categories: ['Java']
keywords: ["Coders Heart","Java CompletableFuture", "multiple REST calls Java", "asynchronous programming Java", "Java concurrency", "REST API calls", "CompletableFuture tutorial", "Java development", "handling REST requests", "Java async processing", "advanced Java features"]
tags: ['Java', 'Dev Updates']
authors:
  - name: 'Debasis Panda'
    avatar: 'https://i.imgur.com/foccMQo.png'
    bio: 'Coder Heart: Passionate Insights and Practical Guides for Developers'
---

## Introduction to REST Calls with CompletableFuture 🌐

In the realm of modern Java development, efficient handling of concurrent tasks is paramount. Java's CompletableFuture offers a robust solution for asynchronous programming, enabling developers to execute multiple REST calls concurrently and manage their results seamlessly. This blog delves into advanced techniques, showcases intricate code examples, and explores the latest features of CompletableFuture to empower developers in crafting high-performance applications.

### 🌟 Understanding CompletableFuture in Java

Java's CompletableFuture, introduced in Java 8 as part of the Concurrency API, revolutionizes asynchronous programming by providing a flexible mechanism to manage tasks asynchronously. It facilitates non-blocking operations, supports task composition, and enhances error handling, making it ideal for scenarios involving parallel execution of REST API calls.

### ⚙️ Core Capabilities of CompletableFuture

1. **Asynchronous Execution**: CompletableFuture allows tasks to run concurrently, leveraging threads efficiently to avoid blocking operations.
   
2. **Composition and Chaining**: It supports fluent API methods for combining multiple asynchronous tasks sequentially or in parallel, enabling complex workflows.
   
3. **Error Handling**: CompletableFuture provides robust mechanisms for handling exceptions and managing errors across asynchronous operations.
   
4. **Completion Handling**: Developers can define actions to be executed upon completion, enabling seamless integration of results from multiple tasks.

### 🚀 Making Multiple REST Calls with CompletableFuture

#### 🏷️ Scenario: Concurrent Retrieval of Data from External APIs

Consider a scenario where an application needs to fetch data from multiple REST APIs concurrently using CompletableFuture.

#### 💻 Example: Concurrent REST API Calls

```java
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutionException;

public class MultiRestCallsExample {

    public static void main(String[] args) throws InterruptedException, ExecutionException {
        CompletableFuture<String> result1 = CompletableFuture.supplyAsync(() -> fetchDataFromAPI("https://api.example.com/data1"));
        CompletableFuture<String> result2 = CompletableFuture.supplyAsync(() -> fetchDataFromAPI("https://api.example.com/data2"));
        CompletableFuture<String> result3 = CompletableFuture.supplyAsync(() -> fetchDataFromAPI("https://api.example.com/data3"));

        CompletableFuture<Void> allOf = CompletableFuture.allOf(result1, result2, result3);

        allOf.thenRun(() -> {
            try {
                String data1 = result1.get();
                String data2 = result2.get();
                String data3 = result3.get();
                System.out.println("Data from API 1: " + data1);
                System.out.println("Data from API 2: " + data2);
                System.out.println("Data from API 3: " + data3);
            } catch (InterruptedException | ExecutionException e) {
                System.err.println("Error fetching data: " + e.getMessage());
            }
        });

        allOf.get();
    }

    private static String fetchDataFromAPI(String apiUrl) {
        return "Mock data from " + apiUrl;
    }
}
```

#### 🔍 Explanation:

1. **CompletableFuture Initialization**: Three CompletableFuture instances (`result1`, `result2`, `result3`) are created using `supplyAsync()` to fetch data asynchronously from different APIs.
   
2. **Combining Results**: `CompletableFuture.allOf()` combines all CompletableFuture instances into a single CompletableFuture (`allOf`), which completes when all tasks finish.
   
3. **Completion Handling**: `allOf.thenRun()` attaches a callback to process results when all tasks complete. Inside the callback, `get()` is used to retrieve data from each CompletableFuture (`result1`, `result2`, `result3`).
   
4. **Synchronization**: `allOf.get()` ensures that the main thread waits for all tasks to finish before proceeding further.

### 🔧 Advanced Features and Best Practices

#### ⚠️ Error Handling:

```java
.exceptionally(ex -> {
    System.err.println("Failed to fetch data: " + ex.getMessage());
    return null;
});
```

#### ➕ Combining Results:

```java
CompletableFuture<String> combinedResult = CompletableFuture.allOf(result1, result2, result3)
    .thenApplyAsync(voidResult -> {
        String combinedData = result1.join() + ", " + result2.join() + ", " + result3.join();
        return combinedData;
    });
```

#### ⏱️ Timeout Handling:

```java
CompletableFuture<String> resultWithTimeout = result1.applyToEither(result2, data -> data)
    .orTimeout(5, TimeUnit.SECONDS)
    .exceptionally(ex -> "Timeout occurred: " + ex.getMessage());
```

### 🏁 Conclusion

CompletableFuture in Java empowers developers to embrace the paradigm of asynchronous programming effectively. By leveraging its capabilities for managing multiple REST API calls concurrently, developers can enhance application responsiveness and scalability. Java's evolution continues to enrich CompletableFuture with advanced features and enhancements, cementing its position as a cornerstone for building robust and efficient software solutions.

Embark on a journey of mastery with CompletableFuture and elevate your Java development skills. Explore advanced techniques for handling multiple REST calls concurrently, ensuring your applications meet the demands of modern, asynchronous workflows with confidence and efficiency.