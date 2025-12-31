# Lifecycle Methods (Class Components)

## THEORY EXERCISE

### 1. What are lifecycle methods in React class components? Describe the phases of a component’s lifecycle.

- Lifecycle methods are special methods in React class components that run at specific stages of a component’s existence.
- They allow developers to control what happens when a component is created, updated, or removed from the UI.
- The **mounting phase** occurs when a component is created and inserted into the DOM.
- The **updating phase** happens when a component’s state or props change and the UI needs to re-render.
- The **unmounting phase** occurs when a component is removed from the DOM.
- These phases help manage data fetching, UI updates, and cleanup tasks efficiently.

### 2. Explain the purpose of componentDidMount(), componentDidUpdate(), and componentWillUnmount().

- `componentDidMount()` is called after the component is rendered for the first time.
- It is mainly used for tasks like fetching data from APIs or setting up subscriptions.
- `componentDidUpdate()` is called after the component updates due to changes in state or props.
- It is used to respond to updates, such as performing actions when data changes.
- `componentWillUnmount()` is called just before the component is removed from the DOM.
- It is used to clean up resources like timers, event listeners, or subscriptions to prevent memory leaks.

---

## LAB EXERCISE

### Task 1: Fetch data using componentDidMount()

[DataFetcherTask1](./lifecycle-methods-class-components/src/components/DataFetcherTask1.jsx)

### Explanation:

- a React class component is created to fetch data from an external API.
- The API call is made inside the `componentDidMount()` lifecycle method, which executes after the component is mounted to the DOM.
- The fetched data is stored in the component’s state and displayed in the UI as a list.

### Task 2: Updated version of Task 1 with lifecycle logs

[DataFetcherTask2](./lifecycle-methods-class-components/src/components/DataFetcherTask2.jsx)

### Explanation:

- lifecycle methods are used to track component behavior during updates and removal.
- The `componentDidUpdate()` method logs a message to the console whenever the component’s state changes, indicating that an update has occurred.
- The `componentWillUnmount()` method logs a message when the component is about to be removed from the DOM, helping demonstrate cleanup and unmounting behavior in React class components.

---
