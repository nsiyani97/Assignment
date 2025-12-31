# JavaScript Introduction

### 1. What is JavaScript? Explain the role of JavaScript in web development.

- JavaScript is a high-level, interpreted programming language used to create dynamic and interactive web pages.
- It allows developers to add functionality such as form validation, animations, and dynamic content updates.
- JavaScript runs in the browser and interacts with HTML and CSS.
- It plays a key role in front-end development and is also used on the server side with technologies like Node.js.

### 2. How is JavaScript different from other programming languages like Python or Java?

- JavaScript is mainly used for web development and runs directly in the browser.
- Python and Java are general-purpose programming languages used for applications, software, and backend systems.
- JavaScript is dynamically typed, while Java is statically typed.
- JavaScript is event-driven and closely integrated with HTML and CSS for web applications.

### 3. Discuss the use of `<script>` tag in HTML. How can you link an external JavaScript file?

- The `<script>` tag is used to include JavaScript code inside an HTML document.
- It can be placed in the `<head>` or at the end of the `<body>` section.
- External JavaScript files are linked using the `src` attribute.
- Using external files improves code organization and reusability.

Example:

```html
<script src="script.js"></script>
```

- This approach keeps JavaScript code separate from HTML structure.

---

# Variables and Data Types

### 1. What are variables in JavaScript? How do you declare a variable using var, let, and const?

- Variables are used to store data values that can be used and modified in a program.
- In JavaScript, variables are declared using `var`, `let`, or `const`.
- `var` is the older way to declare variables and has function scope.
- `let` is block-scoped and allows values to be updated.
- `const` is also block-scoped and is used for values that should not be reassigned.

### 2. Explain the different data types in JavaScript. Provide examples for each.

- JavaScript supports **primitive** and **non-primitive** data types.
- Primitive data types include:

  - `String`: `"Hello"`
  - `Number`: `100`
  - `Boolean`: `true` or `false`
  - `Undefined`: `undefined`
  - `Null`: `null`

- Non-primitive data types include:

  - `Object`: `{ name: "John", age: 25 }`
  - `Array`: `[1, 2, 3]`

### 3. What is the difference between undefined and null in JavaScript?

- `undefined` means a variable has been declared but not assigned any value.
- It is automatically assigned by JavaScript.
- `null` is an intentional assignment that represents no value.
- It is used by programmers to clear or indicate empty values.

---

# JavaScript Operators

### 1. What are the different types of operators in JavaScript? Explain with examples.

#### a. Arithmetic Operators

- Arithmetic operators are used to perform mathematical calculations on numbers.
- They include operations like addition, subtraction, multiplication, and division.
- These operators are commonly used in calculations, counters, and formulas.
- Example: `+ , - , * , / , %`

#### b. Assignment Operators

- Assignment operators are used to assign values to variables.
- They can also perform operations while assigning values.
- These operators help update variable values efficiently.
- Example: `= , += , -= , *= , /=`

#### c. Comparison Operators

- Comparison operators compare two values and return a boolean result.
- They are mainly used in conditions and decision-making statements.
- These operators help control program flow.
- Example: `== , === , != , > , < , >= , <=`

#### d. Logical Operators

- Logical operators are used to combine multiple conditions.
- They return true or false based on logical evaluation.
- These operators are widely used in validations and authentication logic.
- Example: `&& (AND), || (OR), ! (NOT)`

### 2. What is the difference between == and === in JavaScript?

- `==` is the loose equality operator that compares values after converting data types.
- It may consider different data types as equal if their values are similar.
- `===` is the strict equality operator that compares both value and data type.
- It does not perform type conversion and is recommended for accurate comparisons.

---

# Control Flow (If-Else, Switch)

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

# Loops (For, While, Do-While)

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

# Functions

### 1. What are functions in JavaScript? Explain the syntax for declaring and calling a function.

- Functions are reusable blocks of code that perform a specific task.
- They help reduce code repetition and improve readability and maintainability.
- A function is declared using the `function` keyword, followed by a name and parentheses.
- A function is executed (called) by using its name followed by parentheses.

### 2. What is the difference between a function declaration and a function expression?

- A **function declaration** defines a function with a name and can be called before it is defined in the code.
- It is hoisted by JavaScript, meaning it is available throughout the scope.
- A **function expression** assigns a function to a variable.
- Function expressions are not hoisted and can only be used after they are defined.

### 3. Discuss the concept of parameters and return values in functions.

- **Parameters** are variables listed inside the function parentheses used to receive input values.
- They allow functions to work with different data.
- A **return value** sends the result back to the place where the function was called.
- The `return` statement ends function execution and outputs a value.

---

# Arrays

### 1. What is an array in JavaScript? How do you declare and initialize an array?

- An array in JavaScript is a data structure used to store multiple values in a single variable.
- It allows storing related data items such as numbers, strings, or objects together.
- Arrays help manage and organize data efficiently, especially when working with lists.
- An array can be declared and initialized by assigning multiple values to a variable at once.

* Declaration and Initialization Explanation:
* An array is declared using square brackets `[]`.
* Values are placed inside the brackets, separated by commas.
* The array variable can then be used to access or modify its elements.

### 2. Explain the methods push(), pop(), shift(), and unshift() used in arrays.

- `push()` is used to add one or more elements to the end of an array.
- `pop()` is used to remove the last element from an array.
- `shift()` is used to remove the first element from an array.
- `unshift()` is used to add one or more elements to the beginning of an array.
- These methods help modify array contents dynamically during program execution.

---

# Objects

### 1. What is an object in JavaScript? How are objects different from arrays?

- An object in JavaScript is a collection of related data stored as **key–value pairs**.
- It is used to represent real-world entities such as a user, car, or product with properties and values.
- Objects store data with meaningful names (keys), making the data more readable and structured.
- Arrays store data in an ordered list using numeric indexes, while objects store data using named properties.
- Arrays are best for lists of items, whereas objects are better for structured data with different attributes.

### 2. Explain how to access and update object properties using dot notation and bracket notation.

- Object properties can be accessed using **dot notation** written as `objectName.propertyName`, where the property name is fixed and directly accessed.
- In dot notation, JavaScript looks inside the object and returns the value linked to that property.
- Bracket notation is written as `objectName["propertyName"]` and is used when the property name is dynamic or stored as a string.
- JavaScript evaluates the string inside the brackets and then accesses the matching property.
- To update a property, a new value is assigned using `objectName.propertyName = newValue` or `objectName["propertyName"] = newValue`.
- When a new value is assigned, the old value of that property is replaced with the updated one.
- Bracket notation is more flexible, while dot notation is simpler and more readable.

---

# JavaScript Events

### 1. What are JavaScript events? Explain the role of event listeners.

- JavaScript events are actions or occurrences that happen in the browser, such as clicking a button, typing in an input, or loading a page.
- Events allow JavaScript to respond to user interactions and make web pages interactive.
- An **event listener** is a function that waits for a specific event to occur on an element.
- When the event happens, the listener executes the assigned code.
- Event listeners help separate HTML structure from JavaScript behavior, improving code clarity.

### 2. How does the addEventListener() method work in JavaScript? Provide an example.

- The `addEventListener()` method attaches an event handler to an element.
- It listens for a specified event and runs a function when that event occurs.
- The syntax is written as `element.addEventListener("event", function)`, where the event defines what action to listen for and the function defines what to execute.

Example:

```javascript
button.addEventListener("click", function () {
  alert("Button clicked!");
});
```

- Here, `addEventListener` listens for a `click` event on the button.
- When the button is clicked, the function inside it is executed.
- This method allows multiple event handlers to be added to the same element.

---

# DOM Manipulation

### 1. What is the DOM (Document Object Model) in JavaScript? How does JavaScript interact with the DOM?

- The DOM (Document Object Model) is a structured representation of an HTML document created by the browser.
- It represents the webpage as a tree of objects, where each HTML element becomes a node.
- JavaScript interacts with the DOM to read, modify, add, or remove elements and content dynamically.
- Through the DOM, JavaScript can change text, styles, attributes, and respond to user actions without reloading the page.

### 2. Explain the methods getElementById(), getElementsByClassName(), and querySelector().

- `getElementById("id")` is used to select a single HTML element with a specific id; JavaScript searches the DOM and returns the element whose id matches the given value.
- `getElementsByClassName("className")` selects all elements that share the same class name and returns them as a collection; JavaScript groups matching elements together so they can be accessed one by one.
- `querySelector("selector")` selects the first element that matches a CSS-style selector; JavaScript uses the selector rules (like id, class, or tag) to find the element.
- These methods allow JavaScript to target specific elements and manipulate them efficiently.

---

# JavaScript Timing Events (setTimeout, setInterval)

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

# JavaScript Error Handling

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
