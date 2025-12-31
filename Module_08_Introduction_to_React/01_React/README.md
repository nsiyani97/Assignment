# Introduction to React.js

## THEORY EXERCISE

### 1. What is React.js? How is it different from other JavaScript frameworks and libraries?

- React.js is a JavaScript library developed by Facebook for building user interfaces, especially single-page applications.
- It focuses mainly on the **view layer** of an application rather than providing a complete framework.
- React uses a component-based approach, where the UI is divided into small, reusable parts.
- Unlike traditional frameworks, React allows developers to manage UI efficiently using state and props, making applications faster and more scalable.

### 2. Explain the core principles of React such as the Virtual DOM and component-based architecture.

- The **Virtual DOM** is a lightweight copy of the real DOM that React uses to track changes efficiently.
- When data changes, React updates the Virtual DOM first and then applies only the necessary changes to the real DOM.
- This process improves performance by reducing direct manipulation of the browser DOM.
- **Component-based architecture** means the UI is broken into independent, reusable components.
- Each component manages its own logic and rendering, making the application easier to develop and maintain.

### 3. What are the advantages of using React.js in web development?

- React improves performance through efficient DOM updates using the Virtual DOM.
- It promotes code reusability through components, reducing development time.
- React applications are easier to maintain due to clear separation of concerns.
- It has a strong ecosystem, community support, and is widely used in modern web development.
- React works well with other libraries and frameworks, making it flexible and adaptable.

---

## LAB EXERCISE

### Task 1: Set up a new React.js project using create-react-app

[my-app](./my-app/)

---

### Task 2: Create a basic component that displays "Hello, React!"

[Hello, React! component](./my-app/src/component/Hello.jsx)

### Explanation:

- In this lab, a new React project is created using create-react-app.
- The application starts from `index.js`, which renders the `App` component.
- The `App` component imports and displays the `Hello` component.
- The `Hello` component is a simple functional component that displays the text **"Hello, React!"** on the webpage.

---
