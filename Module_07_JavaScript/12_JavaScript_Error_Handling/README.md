# JavaScript Error Handling

## THEORY ASSIGNMENT

### 1. What is error handling in JavaScript? Explain the try, catch, and finally blocks with an example.

- Error handling in JavaScript is used to manage runtime errors so that the program does not crash.
- It allows developers to handle unexpected situations gracefully and provide meaningful messages.
- The `try` block contains code that may cause an error during execution.
- The `catch` block runs if an error occurs in the try block and is used to handle that error.
- The `finally` block always executes, whether an error occurs or not, and is used for cleanup tasks.

Example:

```javascript
try {
  let result = 10 / 0;
  console.log(result);
} catch (error) {
  console.log("An error occurred");
} finally {
  console.log("Execution completed");
}
```

- In this example, JavaScript checks the code inside `try`.
- If an error occurs, the `catch` block handles it.
- The `finally` block runs at the end in all cases.

### 2. Why is error handling important in JavaScript applications?

- Error handling prevents applications from crashing due to unexpected issues.
- It improves user experience by showing proper error messages instead of blank pages.
- Error handling helps developers debug and maintain code easily.
- It ensures application stability and reliability, especially in large projects.

---

## Lab Assignment

[error program](./Lab/divide-by-zero.html)

### Explanation:

- In this program, the division operation is placed inside a try block.
- If the divisor is zero, a custom error is thrown using the `Error` object.
- The catch block handles the error and displays an appropriate error message on the webpage instead of stopping the program execution.

---
