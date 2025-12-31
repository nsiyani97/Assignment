# Components (Functional & Class Components)

## THEORY EXERCISE

### 1. What are components in React? Explain the difference between functional components and class components.

- Components are the building blocks of a React application used to create reusable and independent UI parts.
- Each component represents a part of the user interface and controls its own structure and behavior.
- **Functional components** are simple JavaScript functions that return UI and are mainly used with React Hooks.
- **Class components** are ES6 classes that extend React.Component and can manage state using lifecycle methods.
- Functional components are simpler and preferred in modern React, while class components are mostly used in older codebases.

### 2. How do you pass data to a component using props?

- Data is passed to a component using **props**, which are short for properties.
- Props are passed from a parent component to a child component as attributes.
- The syntax is written as `ComponentName propName={value}`, where the parent sends data.
- Inside the component, the value is accessed using `props.propName`.
- Props are read-only, meaning a component cannot modify the data it receives.

### 3. What is the role of render() in class components?

- The `render()` method is responsible for displaying the UI of a class component.
- It returns JSX that defines what should appear on the screen.
- Whenever state or props change, React automatically calls the render() method again.
- This ensures the UI always stays updated with the latest data.

---

## LAB EXERCISE

### Task 1: Functional Component

[Greeting component](./component-types/src/components/Greeting.jsx)

### Task 2: Class Component

[WelcomeMessage component](./component-types/src/components/WelcomeMessage.jsx)

### Explanation:

- The `Greeting` component is a functional component that receives data using props and displays dynamic content.
- The `WelcomeMessage` component is a class component that uses the `render()` method to return JSX.
- Both components are imported and used inside `App.js`, demonstrating component reusability and structure in React.

---
