# JavaScript Timing Events (setTimeout, setInterval)

## THEORY ASSIGNMENT

### 1. Explain the setTimeout() and setInterval() functions in JavaScript. How are they used for timing events?

- `setTimeout()` is a JavaScript function used to execute a piece of code **once after a specified delay**.
- It is commonly used when an action needs to happen after some time, such as showing a message or changing content.
- `setInterval()` is used to execute a piece of code **repeatedly at fixed time intervals**.
- It is useful for tasks like updating clocks, timers, or refreshing data.
- Both functions help control time-based execution in JavaScript without blocking the program.

### 2. Provide an example of how to use setTimeout() to delay an action by 2 seconds.

Example:

```javascript
setTimeout(function () {
  console.log("This message appears after 2 seconds");
}, 2000);
```

- Here, `setTimeout` delays the execution of the function.
- The value `2000` represents time in milliseconds (2 seconds).
- After the delay, the function inside `setTimeout()` is executed once.

---

## Lab Assignment

### Task 1: Change background color after 5 seconds using setTimeout()

[Change background color program](./Lab/background-change.html)

### Explanation:

- `setTimeout()` delays execution of the function by **5000 milliseconds (5 seconds)**.
- After 5 seconds, the background color of the webpage changes to light blue.
- The code runs only **once**.

---

### Task 2: Digital clock using setInterval()

[Digital clock program](./Lab/digital-clock.html)

### Explanation:

- `setInterval()` calls the `updateClock()` function **every 1000 milliseconds (1 second)**.
- `Date()` gets the current system time.
- `toLocaleTimeString()` formats the time in a readable format.
- The clock updates automatically every second.

---
