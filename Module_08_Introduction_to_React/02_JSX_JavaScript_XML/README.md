# JSX (JavaScript XML)

## THEORY EXERCISE

### 1. What is JSX in React.js? Why is it used?

- JSX (JavaScript XML) is a syntax extension used in React to write HTML-like code inside JavaScript.
- It makes the structure of user interfaces easier to read and understand.
- JSX allows developers to combine markup and logic in a single file.
- It helps React create elements more efficiently and improves code readability.

### 2. How is JSX different from regular JavaScript? Can you write JavaScript inside JSX?

- JSX looks similar to HTML but is actually written inside JavaScript.
- Unlike regular JavaScript, JSX allows writing UI structure in a declarative way.
- JavaScript expressions can be written inside JSX using curly braces.
- This feature allows dynamic content rendering within the UI.

### 3. Discuss the importance of using curly braces `{}` in JSX expressions.

- Curly braces `{}` are used in JSX to embed JavaScript expressions.
- They allow values, variables, and expressions to be evaluated and displayed dynamically.
- Curly braces help connect component logic with UI output.
- Without curly braces, JSX would treat values as plain text instead of dynamic data.

---

### LAB EXERCISE

### Task: Create a React component that renders:

- A heading with text **"Welcome to JSX"**
- A paragraph explaining JSX with dynamic data using curly braces

[JSX greet component](./jsx-javascript-xml/src/component/JSXExample.jsx)

### Explanation:

- The component uses JSX to define UI elements.
- JavaScript variables `topic` and `description` are inserted into JSX using `{}` to display dynamic content on the page.

---
