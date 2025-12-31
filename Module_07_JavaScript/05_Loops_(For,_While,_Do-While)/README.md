# Loops (For, While, Do-While)

## THEORY ASSIGNMENT

### 1. Explain the different types of loops in JavaScript. Provide a basic example of each.

- Loops are used to execute a block of code repeatedly until a specified condition is met.
- JavaScript provides different types of loops to handle repeated tasks efficiently.

**For Loop**

- A `for` loop is used when the number of iterations is known in advance.
- It consists of initialization, condition checking, and increment/decrement.
- Commonly used for iterating over arrays or a fixed range of numbers.

Example:

```javascript
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
```

**While Loop**

- A `while` loop runs as long as the given condition is true.
- The condition is checked before executing the loop body.
- It is used when the number of iterations is not known beforehand.

Example:

```javascript
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}
```

**Do-While Loop**

- A `do-while` loop executes the code block at least once.
- The condition is checked after the loop body is executed.
- It is useful when the code must run at least one time.

Example:

```javascript
let i = 1;
do {
  console.log(i);
  i++;
} while (i <= 5);
```

### 2. What is the difference between a while loop and a do-while loop?

- In a `while` loop, the condition is checked before executing the loop body.
- If the condition is false initially, the loop may not run at all.
- In a `do-while` loop, the code executes first and the condition is checked afterward.
- This guarantees that the loop runs at least once, even if the condition is false.

---

## Lab Assignment

### Task 1: Print numbers from 1 to 10 using a for loop

[for loop program](./Lab/task1-for-loop.html)

### Explanation:

demonstrates a _for loop_ where the number of iterations is fixed (1 to 10).

### Task 2: Sum all even numbers between 1 and 20 using a while loop

[while loop program](./Lab/task2-while-loop.html)

### Explanation:

uses a _while loop_ to repeatedly check numbers and calculate the sum of even values.

### Task 3: Use a do-while loop to take input until number > 10

[do-while loop program](./Lab/task3-do-while-loop.html)

### Explanation:

uses a _do-while loop_ to ensure user input is taken at least once before validation.

---
