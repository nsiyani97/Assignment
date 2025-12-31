# Handling Events in React

## THEORY EXERCISE

### 1. How are events handled in React compared to vanilla JavaScript? Explain the concept of synthetic events.

- In vanilla JavaScript, events are handled by directly attaching event listeners to DOM elements.
- In React, events are handled using **camelCase** event names and are written directly inside JSX.
- React uses **Synthetic Events**, which are wrapper objects around native browser events.
- Synthetic events provide a consistent event system across different browsers.
- This abstraction improves performance and ensures predictable behavior in React applications.

### 2. What are some common event handlers in React.js? Provide examples of onClick, onChange, and onSubmit.

- React provides built-in event handlers to manage user interactions.
- `onClick` is used to handle mouse click events.
- `onChange` is used to handle changes in input fields.
- `onSubmit` is used to handle form submission events.

Examples:

```jsx
<button onClick={handleClick}>Click Me</button>

<input type="text" onChange={handleChange} />

<form onSubmit={handleSubmit}>
  <button type="submit">Submit</button>
</form>
```

- These handlers connect user actions to component logic.
- They help make React components interactive and dynamic.

### 3. Why do you need to bind event handlers in class components?

- In class components, event handler methods do not automatically bind to the class instance.
- Without binding, the `this` keyword may be undefined inside the handler.
- Binding ensures that `this` correctly refers to the component instance.
- It allows access to component state and props inside event handler methods.
- Binding is necessary for proper event handling in class-based components.

---

## LAB EXERCISE

### Task 1: Button click event

[Click Button event component](./events-handling/src/components/ClickButton.jsx)

### Task 2: Input change event

[Input Change event component](./events-handling/src/components/InputForm.jsx)

## Explanation:

- In this assignment, React event handling is demonstrated using functional components and hooks.
- `onClick` is used to update state when a button is clicked, and `onChange` is used to track input field values dynamically.
- React’s synthetic events make event handling consistent and easier compared to traditional JavaScript.

---
