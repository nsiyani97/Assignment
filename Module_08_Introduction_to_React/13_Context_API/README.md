# Context API

## THEORY EXERCISE

### 1. What is the Context API in React? How is it used to manage global state across multiple components?

- The Context API is a feature in React used to share data across multiple components without passing props manually at every level.
- It helps solve the problem of **prop drilling**, where data has to be passed through many intermediate components.
- Context is commonly used for global data such as themes, user authentication, or language settings.
- A context provides a central place to store data that many components need access to.
- Any component inside the context provider can directly access the shared data.

---

### 2. Explain how createContext() and useContext() are used in React for sharing state.

- `createContext()` is used to create a new context object that will hold shared data.
- It defines a **Provider**, which supplies the data to all child components.
- The Provider is written inline as `Context.Provider value={sharedData}`, where `value` contains the data to share.
- `useContext()` is used inside a functional component to access the shared data.
- It is written as `useContext(ContextName)`, which tells React to read the nearest Provider’s value.
- When the context value changes, all components using that context automatically re-render.
- This approach allows clean, efficient, and centralized state sharing across the app.

---

## LAB EXERCISE

### Task 1: A simple theme toggle (light/dark mode) using the Context API

[Toggle Theme](./context-api/src/task_1/ThemeContext.jsx)

### Explanation:

- Context API is used to manage a global theme state (light/dark).
- `ThemeContext` stores the theme value and toggle function, and multiple components consume this data using `useContext()` without prop drilling.

### Task 2: Use the Context API to create a global user authentication system

[User Authentication](./context-api/src/task_2/AuthContext.jsx)

### Explanation:

- Context API is used for global authentication state.
- `AuthContext` maintains login status and provides login/logout functions.
- Components access authentication data globally to conditionally render login or welcome messages.

---
