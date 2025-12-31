# Control Flow (If-Else, Switch)

## THEORY ASSIGNMENT

### 1. What is control flow in JavaScript? Explain how if-else statements work with an example.

- Control flow refers to the order in which JavaScript statements are executed in a program.
- It allows the program to make decisions and execute different code blocks based on conditions.
- The `if-else` statement checks a condition and runs one block of code if the condition is true, otherwise it runs another block.
- It is commonly used for decision-making such as validation and comparisons.

Example:

```javascript
let age = 18;

if (age >= 18) {
  console.log("Eligible to vote");
} else {
  console.log("Not eligible to vote");
}
```

### 2. Describe how switch statements work in JavaScript. When should you use a switch statement instead of if-else?

- A `switch` statement is used to execute different code blocks based on the value of an expression.
- It compares the expression with multiple `case` values and executes the matching case.
- The `break` statement is used to stop execution after a match is found.
- A `switch` statement is preferred over if-else when there are many fixed values to compare, making the code cleaner and more readable.

---

## Lab Assignment

### Task 1: Check Positive, Negative, or Zero (if-else)

[if-else program](./Lab/task1-if-else.html)

### Explanation:

1. A variable `number` stores a numeric value.
2. `if` checks whether the number is greater than zero.
3. `else if` checks whether the number is less than zero.
4. `else` executes when the number is exactly zero.

---

## Task 2: Display Day of the Week (switch)

[switch program](./Lab/task2-switch.html)

### Explanation:

1. `dayNumber` stores a numeric value representing the day.
2. The `switch` statement compares the value with different cases.
3. The matched case assigns the correct day name.
4. `break` stops further case execution.
5. `default` handles invalid input values.

---
